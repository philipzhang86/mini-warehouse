import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product = {
    name: '',  //!
    sku: '',//!
    currency: '',//!
    sellingPrice: '',//!
    shortDescription: '',
    createdById: '',
    updatedById: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("create product");
  }

  createProduct(): void {
    const token = this.authService.getToken();
    this.http.post('http://localhost:9081/asn-service/api/clients/products/', this.product, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(() => {
      alert('Product created successfully');
      this.goBack();
    }, error => {
      console.error('Error creating product', error);
      alert('Failed to create product' + error.message);
    });
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/product-dashboard']);
  }
}
