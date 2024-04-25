import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-display-asn-list',
  templateUrl: './display-asn-list.component.html',
  styleUrls: ['./display-asn-list.component.scss']
})
export class DisplayAsnListComponent implements OnInit {
  asns: any[] = [];
  filter = {
    status: 'all'  // 'all', '1' (Pending Inbound), '2' (Inbound)
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("display asn list called");
    this.showAsnList();
  }

  showAsnList(): void {
    const token = this.authService.getToken();
    this.http.get<any[]>('http://localhost:9081/asn-service/api/clients/asns/client-list', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(data => {
      this.asns = data.map(asn => ({
        ...asn,
        // Convert UTC date-time to a local date-time string for display, ensuring it is interpreted as UTC
        expectedArrivalTime: new Date(asn.expectedArrivalTime).toISOString().slice(0, 16)
      }));
    }, error => {
      console.error('Error fetching ASN list', error);
    });
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-dashboard']);
  }


}
