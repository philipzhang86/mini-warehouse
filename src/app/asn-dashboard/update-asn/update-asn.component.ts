import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-update-asn',
  templateUrl: './update-asn.component.html',
  styleUrls: ['./update-asn.component.scss']
})
export class UpdateAsnComponent implements OnInit {
  search = {
    id: ''
  };
  asn: any = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("update asn info called");
  }

  searchAsn(form: any): void {
    let url = 'http://localhost:9081/asn-service/api/clients/asns/';
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    if (this.search.id) {
      url += `by-id/${this.search.id}`;
    } else {
      alert('Please provide an ID');
      return;
    }

    this.http.get<any>(url, { headers }).subscribe(
      asn => {
        this.asn = asn;
        this.asn.expectedArrivalTime = new Date(asn.expectedArrivalTime).toISOString().slice(0, 16);  // UTC conversion
      },
      error => {
        console.error('Error fetching ASN info', error);
        alert('Failed to fetch ASN info');
      }
    );
  }

  updateAsn(): void {
    const token = this.authService.getToken();
    // Make sure to send back the UTC string, as we originally adjusted for input display
    this.http.put('http://localhost:9081/asn-service/api/clients/asns/', this.asn, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    }).subscribe(
      () => {
        alert('ASN info updated');
        this.goBack();
      },
      error => {
        console.error('Error updating ASN info', error);
        alert('Failed to update ASN');
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-dashboard']);
  }
}
