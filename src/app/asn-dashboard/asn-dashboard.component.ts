import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asn-dashboard',
  templateUrl: './asn-dashboard.component.html',
  styleUrls: ['./asn-dashboard.component.scss']
})
export class AsnDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center']);
  }
}
