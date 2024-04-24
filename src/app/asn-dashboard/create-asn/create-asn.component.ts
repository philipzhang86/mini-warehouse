import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-create-asn',
  templateUrl: './create-asn.component.html',
  styleUrls: ['./create-asn.component.scss']
})
export class CreateAsnComponent implements OnInit {

  asn = {
    expectedArrivalTime: '', //!
    status: 1
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("create asn");
  }

  createAsn(): void {
    const token = this.authService.getToken();
    this.http.post('http://localhost:9081/asn-service/api/clients/asns/', this.asn, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(() => {
      alert('Asn created successfully');
      this.goBack();
    }, error => {
      console.error('Error creating asn', error);
      alert('Failed to create asn' + error.message);
    });
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-dashboard']);
  }
}
