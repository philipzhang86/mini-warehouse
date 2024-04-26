import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-update-asn-item',
  templateUrl: './update-asn-item.component.html',
  styleUrls: ['./update-asn-item.component.scss']
})
export class UpdateAsnItemComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-item-dashboard']);
  }
}
