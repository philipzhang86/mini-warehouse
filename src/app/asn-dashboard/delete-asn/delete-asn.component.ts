import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-delete-asn',
  templateUrl: './delete-asn.component.html',
  styleUrls: ['./delete-asn.component.scss']
})
export class DeleteAsnComponent implements OnInit {
  asn: any = null;
  search = {
    id: ''
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  searchAsn(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    if (this.search.id) {
      const url = `http://localhost:9081/asn-service/api/clients/asns/by-id/${this.search.id}`;
      this.http.get<any>(url, { headers }).subscribe(
        asn => {
          this.asn = {
            ...asn,
            expectedArrivalTime: new Date(asn.expectedArrivalTime).toISOString().slice(0, 16)  // Format UTC date-time
          };
        },
        error => {
          console.error('Error fetching ASN info', error);
          alert(`ASN not found for ID: ${this.search.id}`);
          this.asn = null; // Clear the displayed ASN info
        }
      );
    } else {
      alert('Please provide an ASN ID');
    }
  }

  deleteAsn(): void {
    const isConfirmed = confirm('Are you sure you want to delete this ASN?');
    if (!isConfirmed) {
      return;
    }

    const token = this.authService.getToken();
    const url = `http://localhost:9081/asn-service/api/clients/asns/${this.asn.id}`;
    this.http.delete(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(() => {
      alert('ASN deleted successfully');
      this.asn = null; // Clear the displayed ASN info
    }, error => {
      console.error('Error deleting ASN', error);
      alert('Failed to delete ASN');
    });
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-dashboard']);
  }
}
