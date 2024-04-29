import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-inventory-item',
  templateUrl: './delete-inventory-item.component.html',
  styleUrls: ['./delete-inventory-item.component.scss']
})
export class DeleteInventoryItemComponent implements OnInit {
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

  deleteInventoryItem(inventoryId: Number): void {
    const isConfirmed = confirm('Are you sure you want to delete this inventory item?');
    if (!isConfirmed) {
      return;
    }

    const token = this.authService.getToken();
    const url = `http://localhost:9082/inventory-service/api/staffs/inventories/${inventoryId}`;
    this.http.delete(url, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    }).subscribe(
      () => {
        alert('Inventory item deleted');
        this.inventory = null;  // Clear the displayed inventory item info
      },
      error => {
        console.error('Error deleting inventory item', error);
        alert('Failed to delete inventory item');
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/inventory-dashboard']);
  }
}
