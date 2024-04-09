import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service'; // 确保你有AuthService来获取token

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  selectedSection = 'info'; // 默认选中Client Info

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    //this.getClientInfo(); // 页面初始化时获取客户信息
  }

  selectSection(section: string): void {
    this.selectedSection = section;
  }
}

