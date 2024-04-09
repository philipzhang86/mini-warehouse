import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service'; // 确保你有AuthService来获取token

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  selectedSection = 'info'; // 默认选中Client Info
  client: any = {}; // 存储客户信息
  role: string | null = this.authService.getRole(); // 获取角色

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.getClientInfo(); // 页面初始化时获取客户信息
  }

  getClientInfo(): void {
    const token = this.authService.getToken();
    this.http.get<any>('http://localhost:9080/user-service/api/clients/my-info', { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) })
      .subscribe(client => this.client = client, error => console.error('Error fetching client info', error));
  }

  updateClient(): void {
    const token = this.authService.getToken();
    this.http.put('http://localhost:9080/user-service/api/clients/', this.client, { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) })
      .subscribe(() => alert('Client info updated'), error => console.error('Error updating client info', error));
  }
}
