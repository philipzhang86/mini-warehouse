import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-send-asn',
  templateUrl: './send-asn.component.html',
  styleUrls: ['./send-asn.component.scss']
})
export class SendAsnComponent implements OnInit {
  asns: any[] = [];
  selectedAsn: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.showAsnList();
  }

  showAsnList(): void {
    const token = this.authService.getToken();
    this.http.get<any[]>('http://localhost:9081/asn-service/api/clients/asns/client-list/1', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(data => {
      this.asns = data;
    }, error => {
      console.error('Error fetching ASN list', error);
    });
  }

  selectAsn(asn: any): void {
    this.selectedAsn = asn;
    asn.status = 1;
  }

  sendSelectedAsn(): void {
    if (!this.selectedAsn) {
      alert('Please select an ASN to send');
      return;
    }

    const token = this.authService.getToken();
    const url = 'http://localhost:9081/asn-service/api/clients/asns/send-message';
    this.http.post(url, this.selectedAsn, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    }).subscribe(() => {
      alert('ASN message sent successfully');
      this.selectedAsn = null; // Optionally clear the selection
    }, error => {
      console.error('Error sending ASN message', error);
      alert('Failed to send ASN message');
    });
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-dashboard']);
  }

}
