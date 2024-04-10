import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router'; // 引入Router服务

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  search = {
    id: '',
    username: ''
  };
  client: any = {};

  constructor(
    private http: HttpClient,
    private router: Router, // 注入Router
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("update client info called");
  }

  searchClient(form: any): void {
    const { id, username } = form.value;
    let url = 'http://localhost:9080/user-service/api/staffs/client/';
    if (id) {
      url += `by-id/${id}`;
    } else {
      url += `by-username/${username}`;
    }

    const token = this.authService.getToken(); // 获取Token
    this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // 设置Authorization头部
      })
    }).subscribe(client => {
      this.client = client;
      console.log(this.client);
    }, error => {
      console.error('Error fetching client info', error);
      alert('Failed to fetch client info');
    });
  }

  updateClient(): void {
    const token = this.authService.getToken();
    this.http.put('http://localhost:9080/user-service/api/clients/', this.client, { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) })
      .subscribe(() => alert('Client info updated'), error => console.error('Error updating client info', error));
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/client-management']);
  }
}
