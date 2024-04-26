import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-create-asn-item',
  templateUrl: './create-asn-item.component.html',
  styleUrls: ['./create-asn-item.component.scss']
})
export class CreateAsnItemComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log("create asn item");
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center/asn-item-dashboard']);
  }

}
