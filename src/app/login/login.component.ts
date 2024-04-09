import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // 引入AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  login(): void {
    this.http.post<any>('http://localhost:9080/user-service/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.authService.storeToken(response.token); // 存储token
        console.log('Received token:', response.token);
        console.log('User role:', response.role); // 现在可以正确获取角色了
        if (response.role === 'CLIENT') { // 注意这里是'role'不是'userType'
          this.router.navigate(['/client-dashboard']);
        } else if (response.role === 'STAFF') {
          this.router.navigate(['/staff-dashboard']);
        }
      },
      error: (e) => {
        this.errorMessage = '登录失败，请检查您的用户名和密码后再试。';
        console.error('登录失败', e);
      }
    });
  }
}

