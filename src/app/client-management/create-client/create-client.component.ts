import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  client = {
    username: '',
    password: '',
    email: '',
    companyName: '',
    areaCode: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: ''
  };

  constructor(private http: HttpClient, private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
    console.log("create client");
  }

  createClient(): void {
    const token = this.authService.getToken(); // 获取Token
    // 在HTTP请求中设置头部，附带Token
    this.http.post('http://localhost:9080/user-service/api/staffs/client', this.client, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // 设置Authorization头部
      })
    }).subscribe(() => {
      alert('Client created successfully');
      this.goBack();
    }, error => {
      console.error('Error creating client', error);
      alert('Failed to create client');
    });
  }


  goBack(): void {
    this.location.back();
  }
}
