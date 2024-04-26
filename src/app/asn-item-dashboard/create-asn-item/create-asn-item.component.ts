import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-create-asn-item',
  templateUrl: './create-asn-item.component.html',
  styleUrls: ['./create-asn-item.component.scss']
})
export class CreateAsnItemComponent implements OnInit {
  asns: any[] = [];
  products: any[] = [];
  asnItem = {
    asnId: '',
    asnItemName: '',
    productId: '',
    skuId: '',
    quantity: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("create asn item");
    this.showAsnList();
    this.showProducts();
  }

  createAsnItem(): void {
    const token = this.authService.getToken();
    this.http.post('http://localhost:9081/asn-service/api/clients/asn-items/', this.asnItem, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(() => {
      alert('ASN item created successfully');
      this.goBack();
    }, error => {
      console.error('Error creating ASN item', error);
      alert('Failed to create ASN item' + error.message);
    });
  }

  showAsnList(): void {
    const token = this.authService.getToken();
    this.http.get<any[]>('http://localhost:9081/asn-service/api/clients/asns/client-list/1', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(data => {
      this.asns = data.map(asn => ({
        ...asn,
        // Convert UTC date-time to a local date-time string for display, ensuring it is interpreted as UTC
        expectedArrivalTime: new Date(asn.expectedArrivalTime).toISOString().slice(0, 16)
      }));
    }, error => {
      console.error('Error fetching ASN list', error);
    });
  }

  showProducts(): void {
    const token = this.authService.getToken();
    this.http.get<any[]>('http://localhost:9081/asn-service/api/clients/products/my-products-list', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(data => {
      this.products = data; // 将获取的数据存储到products数组中
    }, error => {
      console.error('Error fetching products', error);
    });
  }

  onAsnSelect(asn: any): void {
    // Toggle selection
    if (this.asnItem.asnId === asn.id) {
      // If already selected, deselect it
      this.asnItem.asnId = '';
    } else {
      // Select the ASN and fill in the form fields
      this.asnItem.asnId = asn.id;
    }
  }

  onProductSelect(product: any): void {
    // Toggle selection
    if (this.asnItem.productId === product.id) {
      // If already selected, deselect it
      this.asnItem.productId = '';
      this.asnItem.asnItemName = '';
      this.asnItem.skuId = '';
    } else {
      // Select the product and fill in the form fields
      this.asnItem.productId = product.id;
      this.asnItem.asnItemName = product.name;
      this.asnItem.skuId = product.sku;
    }
  }


  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-item-dashboard']);
  }

}
