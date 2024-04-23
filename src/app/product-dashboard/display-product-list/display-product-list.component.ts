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

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/product-dashboard']);
  }
}
