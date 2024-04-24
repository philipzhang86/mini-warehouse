import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display-product-list',
  templateUrl: './display-product-list.component.html',
  styleUrls: ['./display-product-list.component.scss']
})
export class DisplayProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log('DisplayProductListComponent.ngOnInit() called');
    this.loadProducts();
  }

  loadProducts(): void {
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

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/product-dashboard']);
  }
}
