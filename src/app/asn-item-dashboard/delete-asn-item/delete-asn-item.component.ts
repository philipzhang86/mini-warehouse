import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-delete-asn-item',
  templateUrl: './delete-asn-item.component.html',
  styleUrls: ['./delete-asn-item.component.scss']
})
export class DeleteAsnItemComponent implements OnInit {
  searchAsnItem = {
    id: '',
    asnId: '',
    sku: ''
  };
  asnItem: any = {};

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  findAsnItem(): void {
    let url = 'http://localhost:9081/asn-service/api/clients/asn-items/';
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    if (this.searchAsnItem.id) {
      url += `by-id/${this.searchAsnItem.id}`;
    } else if (this.searchAsnItem.asnId && this.searchAsnItem.sku) {
      url += `by-asn-id-and-sku/${this.searchAsnItem.asnId}/${this.searchAsnItem.sku}`;
    } else {
      alert('Please provide both ASN ID and SKU or an ASN Item ID');
      return;
    }

    this.http.get<any>(url, { headers }).subscribe(
      asnItem => {
        this.asnItem = asnItem;
        console.log(this.asnItem);
      },
      error => {
        console.error('Error fetching asn item info', error);
        alert('Failed to fetch asn item info');
      }
    );
  }

  deleteAsnItem(id: number): void {
    const isConfirmed = confirm('Are you sure you want to delete this ASN item?');
    if (!isConfirmed) return;

    const token = this.authService.getToken();
    const url = `http://localhost:9081/asn-service/api/clients/asn-items/${id}`;
    this.http.delete(url, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    }).subscribe(() => {
      alert('ASN item deleted successfully');
      this.asnItem = null;
    }, error => {
      console.error('Error deleting ASN item', error);
      alert('Failed to delete ASN item');
    });
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-item-dashboard']);
  }
}
