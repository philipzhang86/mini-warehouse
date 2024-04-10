import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router'; // 引入Router服务

@Component({
  selector: 'app-display-client-info',
  templateUrl: './display-client-info.component.html',
  styleUrls: ['./display-client-info.component.scss']
})
export class DisplayClientInfoComponent implements OnInit {
  search = {
    id: '',
    username: ''
  };
  client: any;

  constructor(
    private http: HttpClient,
    private router: Router, // 注入Router
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("display client info");
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
    }, error => {
      console.error('Error fetching client info', error);
      alert('Failed to fetch client info');
    });
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/client-management']);
  }
}
