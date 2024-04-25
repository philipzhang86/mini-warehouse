import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-display-asn-list',
  templateUrl: './display-asn-list.component.html',
  styleUrls: ['./display-asn-list.component.scss']
})
export class DisplayAsnListComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("display asn list called");
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-dashboard']);
  }
}
