import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-inventory-item',
  templateUrl: './create-inventory-item.component.html',
  styleUrls: ['./create-inventory-item.component.scss']
})
export class CreateInventoryItemComponent implements OnInit {
  inventory = {
    clientId: '',//!
    productId: '',//1
    productName: '',
    sku: '',
    quantity: ''//!
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  createInventoryItem(): void {
    const token = this.authService.getToken();
    this.http.post('http://localhost:9082/inventory-service/api/staffs/inventories/', this.inventory, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(() => {
      alert('Inventory item created successfully');
      this.goBack();
    }, error => {
      console.error('Error creating inventory item', error);
      alert('Failed to create inventory item' + error.message);
    });
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/inventory-dashboard']);
  }
}
