import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-inventory-item-info',
  templateUrl: './display-inventory-item-info.component.html',
  styleUrls: ['./display-inventory-item-info.component.scss']
})
export class DisplayInventoryItemInfoComponent implements OnInit {
  search = {
    inventoryId: '',
    name: '',
    clientId: '',
    sku: ''
  };
  inventory: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  searchInventoryItem(form: any): void {
    let url = 'http://localhost:9082/inventory-service/api/staffs/inventories/';
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    if (this.search.inventoryId) {
      url += `by-id/${this.search.inventoryId}`;
    } else if (this.search.name && this.search.clientId) {
      url += `by-product-name-and-client-id/${this.search.name}/${this.search.clientId}`;
    } else if (this.search.sku) {
      url += `by-sku/${this.search.sku}`;
    }

    this.http.get<any>(url, { headers }).subscribe(
      inventory => {
        console.log('Inventory item info', inventory);
        this.inventory = inventory;  // Assign the fetched data to the inventory variable
      },
      error => {
        console.error('Error fetching inventory item info', error);
        alert('Failed to fetch inventory item info');
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/inventory-dashboard']);
  }
}
