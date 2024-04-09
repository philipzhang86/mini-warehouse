import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service'; // 确保你有AuthService来获取token

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss']
})
export class StaffDashboardComponent implements OnInit {
  selectedSection = 'info'; // 默认选中Staff Info

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
  }

  selectSection(section: string): void {
    this.selectedSection = section;
  }
}
