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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/product-dashboard']);
  }
}
