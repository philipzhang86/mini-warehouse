import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { CreateClientComponent } from './client-management/create-client/create-client.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { DisplayClientInfoComponent } from './client-management/display-client-info/display-client-info.component';
import { UpdateClientComponent } from './client-management/update-client/update-client.component';
import { DisplayClientsListComponent } from './client-management/display-clients-list/display-clients-list.component';
import { DeleteClientComponent } from './client-management/delete-client/delete-client.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'client-dashboard', component: ClientDashboardComponent,
    children: [{ path: 'client-info', component: ClientInfoComponent }]
  },
  {
    path: 'staff-dashboard', component: StaffDashboardComponent,
    children: [{ path: 'staff-info', component: StaffInfoComponent }, {
      path: 'client-management',
      component: ClientManagementComponent,
      children: [
        { path: 'create-client', component: CreateClientComponent },
        { path: 'display-client-info', component: DisplayClientInfoComponent },
        { path: 'update-client', component: UpdateClientComponent },
        { path: 'display-clients-list', component: DisplayClientsListComponent },
        { path: 'delete-client', component: DeleteClientComponent }
      ]
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

