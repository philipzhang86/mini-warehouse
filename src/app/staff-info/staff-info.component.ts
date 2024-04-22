import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service'; // 确保你有AuthService来获取token
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-info',
  templateUrl: './staff-info.component.html',
  styleUrls: ['./staff-info.component.scss']
})
export class StaffInfoComponent implements OnInit {
  selectedSection = 'info'; // 
  staff: any = {}; // 存储Staff信息
  role: string | null = this.authService.getRole(); // 获取角色

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getStaffInfo(); // 页面初始化时获取Staff信息
  }

  getStaffInfo(): void {
    const token = this.authService.getToken();
    this.http.get<any>('http://localhost:9080/user-service/api/staffs/my-info', { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) })
      .subscribe(staff => this.staff = staff, error => console.error('Error fetching client info', error));
  }

  updateStaff(): void {
    const token = this.authService.getToken();
    this.http.put('http://localhost:9080/user-service/api/staffs/', this.staff, { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) })
      .subscribe(() => alert('Staff info updated'), error => console.error('Error updating client info', error));
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard'])
  }
}
