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
  inventoryItems: any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadInventoryItems();
  }

  loadInventoryItems(): void {
    const token = this.authService.getToken();
    this.http.get<any[]>('http://localhost:9082/inventory-service/api/staffs/inventories/list', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(data => {
      this.inventoryItems = data; // 将获取的数据存储到InventoryItems数组中

    }, error => {
      console.error('Error fetching inventory items list', error);
      alert('Failed to fetch inventory items list');
    });
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/inventory-dashboard']);
  }
}
