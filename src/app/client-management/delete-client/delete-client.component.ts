import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {
  search = {
    id: '',
    username: ''
  };
  client: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  searchClient(form: any): void {
    const { id, username } = form.value;
    let url = 'http://localhost:9080/user-service/api/staffs/client/';
    if (id) {
      url += `by-id/${id}`;
    } else if (username) {
      url += `by-username/${username}`;
    } else {
      alert('Please provide an ID or username');
      return;
    }

    const token = this.authService.getToken();
    this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(client => {
      this.client = client;
    }, error => {
      console.error('Error fetching client info', error);
      alert('Failed to fetch client info');
      this.client = null; // Clear the displayed client info
    });
  }

  deleteClient(id: string, username: string): void {
    // 使用confirm方法弹出对话框，询问用户是否真的想要删除客户
    const isConfirmed = confirm('Are you sure you want to delete this client?');
    if (!isConfirmed) {
      // 如果用户点击“取消”，则直接返回，不执行删除操作
      return;
    }

    // 如果用户点击“确定”，则继续执行删除操作
    const url = 'http://localhost:9080/user-service/api/staffs/clients';
    const params = new HttpParams().set('id', id).set('username', username);
    const token = this.authService.getToken();

    this.http.delete(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      params: params
    }).subscribe(() => {
      alert('Client deleted successfully');
      this.client = null; // 清除显示的客户信息
      // 可选：导航回客户管理页面或执行其他逻辑
      // this.router.navigate(['/staff-dashboard/client-management']);
    }, (error) => {
      console.error('Error deleting client', error);
      alert('Failed to delete client');
    });
  }

  goBack(): void {
    this.router.navigate(['/staff-dashboard/client-management']);
  }
}

