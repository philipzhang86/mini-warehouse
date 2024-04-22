import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // 引入Router服务

@Component({
  selector: 'app-asn-operations-center',
  templateUrl: './asn-operations-center.component.html',
  styleUrls: ['./asn-operations-center.component.scss']
})
export class AsnOperationsCenterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/client-dashboard']);
  }
}
