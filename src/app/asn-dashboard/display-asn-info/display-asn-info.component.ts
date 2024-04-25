import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-display-asn-info',
  templateUrl: './display-asn-info.component.html',
  styleUrls: ['./display-asn-info.component.scss']
})
export class DisplayAsnInfoComponent implements OnInit {
  asn: any;
  asnItems: any[] = [];
  asnId!: number;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("display asn info called");
  }

  fetchAsnById(id: number): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    this.http.get<any>(`http://localhost:9081/asn-service/api/clients/asns/by-id/${id}`, { headers }).subscribe(
      response => {
        this.asn = {
          ...response,
          expectedArrivalTime: new Date(response.expectedArrivalTime).toISOString().slice(0, 16)  // Convert to UTC string and slice for consistency
        };
      },
      error => {
        console.error('ASN not found', error);
        alert(`ASN not found for ID: ${id}`);
        this.asn = null;
      }
    );
  }

  fetchAsnItems(id: number): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    this.http.get<any[]>(`http://localhost:9081/asn-service/api/clients/asn-items/by-asn-id/${id}`, { headers }).subscribe(
      response => {
        this.asnItems = response;
        console.log(this.asnItems);
      },
      error => {
        console.error('Error fetching ASN items', error);
        this.asnItems = [];
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-dashboard']);
  }
}
