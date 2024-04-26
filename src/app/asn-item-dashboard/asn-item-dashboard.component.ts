import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asn-item-dashboard',
  templateUrl: './asn-item-dashboard.component.html',
  styleUrls: ['./asn-item-dashboard.component.scss']
})
export class AsnItemDashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard/asn-operations-center']);
  }
}
