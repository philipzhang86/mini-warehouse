import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router'; // 引入Router服务

@Component({
  selector: 'app-display-clients-list',
  templateUrl: './display-clients-list.component.html',
  styleUrls: ['./display-clients-list.component.scss']
})
export class DisplayClientsListComponent implements OnInit {
  fields = {
    id: false,
    username: false,
    email: false,
    companyName: false,
    phone: false,
    address: false,
    city: false,
    state: false,
    country: false
  };
  clients: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router, // 注入Router
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  showClientsList(): void {
    const token = this.authService.getToken();
    this.http.get<any[]>('http://localhost:9080/user-service/api/staffs/clients', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(data => {
      this.clients = data;
    }, error => {
      console.error('Error fetching clients list', error);
    });
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/client-management']);
  }
}
