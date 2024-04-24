import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  search = {
    id: '',
    name: '',
    sku: ''
  };
  product: any = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  searchProduct(form: any): void {
    let url = 'http://localhost:9081/asn-service/api/clients/products/';
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    if (this.search.id) {
      url += `by-id/${this.search.id}`;
    } else if (this.search.name) {
      url += `by-name/${this.search.name}`;
    } else if (this.search.sku) {
      url += `by-sku/${this.search.sku}`;
    } else {
      alert('Please provide an ID, name or SKU');
      return;
    }

    this.http.get<any>(url, { headers }).subscribe(
      product => {
        this.product = product;
        console.log(this.product);
      },
      error => {
        console.error('Error fetching product info', error);
        alert('Failed to fetch product info');
        this.product = null; // Clear the displayed product info
      }
    );
  }

  deleteProduct(id: string): void {
    const isConfirmed = confirm('Are you sure you want to delete this product?');
    if (!isConfirmed) {
      return;
    }

    const url = `http://localhost:9081/asn-service/api/clients/products/${id}`;
    const token = this.authService.getToken();
    this.http.delete(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(() => {
      alert('Product deleted successfully');
      this.product = null; // Clear the displayed product info
    }, error => {
      console.error('Error deleting product', error);
      alert('Failed to delete product');
    });
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/product-dashboard']);
  }
}
