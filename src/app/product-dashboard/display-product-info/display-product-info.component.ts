import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-product-info',
  templateUrl: './display-product-info.component.html',
  styleUrls: ['./display-product-info.component.scss']
})
export class DisplayProductInfoComponent implements OnInit {
  search = {
    id: '',
    name: '',
    sku: ''
  };
  product: any;

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
    }

    this.http.get<any>(url, { headers }).subscribe(
      product => this.product = product,
      error => {
        console.error('Error fetching product info', error);
        alert('Failed to fetch product info');
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/product-dashboard']);
  }
}
