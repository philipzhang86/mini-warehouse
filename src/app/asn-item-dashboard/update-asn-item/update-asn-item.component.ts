import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-update-asn-item',
  templateUrl: './update-asn-item.component.html',
  styleUrls: ['./update-asn-item.component.scss']
})
export class UpdateAsnItemComponent implements OnInit {
  searchAsnItem = {
    id: '',
    asnId: '',
    sku: ''
  };
  asnItem: any = {};


  constructor(
    private http: HttpClient,
    private router: Router,
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

  updateAsnItem(): void {
    const token = this.authService.getToken();
    this.http.put('http://localhost:9081/asn-service/api/clients/asn-items/', this.asnItem, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    }).subscribe(
      () => alert('ASN item info updated'),
      error => console.error('Error updating ASN item info', error)
    );
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-item-dashboard']);
  }
}

