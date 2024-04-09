import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ClientInfoComponent } from './client-info/client-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'client-dashboard', component: ClientDashboardComponent,
    children: [{ path: 'client-info', component: ClientInfoComponent }]
  },
  { path: 'staff-dashboard', component: StaffDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

