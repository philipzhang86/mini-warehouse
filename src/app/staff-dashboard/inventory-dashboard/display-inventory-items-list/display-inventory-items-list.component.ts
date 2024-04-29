import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display-inventory-items-list',
  templateUrl: './display-inventory-items-list.component.html',
  styleUrls: ['./display-inventory-items-list.component.scss']
})
export class DisplayInventoryItemsListComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/inventory-dashboard']);
  }
}
