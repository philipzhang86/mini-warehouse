// Purpose: This file contains the routing information for the application. It contains the path for each component in the application.
import { AsnOperationsCenterComponent } from './asn-operations-center/asn-operations-center.component';
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
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CreateProductComponent } from './product-dashboard/create-product/create-product.component';
import { DisplayProductInfoComponent } from './product-dashboard/display-product-info/display-product-info.component';
import { DisplayProductListComponent } from './product-dashboard/display-product-list/display-product-list.component';
import { UpdateProductComponent } from './product-dashboard/update-product/update-product.component';
import { DeleteProductComponent } from './product-dashboard/delete-product/delete-product.component';
import { AsnDashboardComponent } from './asn-dashboard/asn-dashboard.component';
import { CreateAsnComponent } from './asn-dashboard/create-asn/create-asn.component';
import { UpdateAsnComponent } from './asn-dashboard/update-asn/update-asn.component';
import { DisplayAsnListComponent } from './asn-dashboard/display-asn-list/display-asn-list.component';
import { DeleteAsnComponent } from './asn-dashboard/delete-asn/delete-asn.component';
import { DisplayAsnInfoComponent } from './asn-dashboard/display-asn-info/display-asn-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'client-dashboard', component: ClientDashboardComponent,
    children: [
      { path: 'client-info', component: ClientInfoComponent },
      {
        path: 'asn-operations-center', component: AsnOperationsCenterComponent,
        children: [
          {
            path: 'product-dashboard', component: ProductDashboardComponent,
            children: [
              { path: 'create-product', component: CreateProductComponent },
              { path: 'display-product-info', component: DisplayProductInfoComponent },
              { path: 'display-product-list', component: DisplayProductListComponent },
              { path: 'update-product', component: UpdateProductComponent },
              { path: 'delete-product', component: DeleteProductComponent }
            ]
          },
          {
            path: 'asn-dashboard', component: AsnDashboardComponent,
            children: [
              { path: 'create-asn', component: CreateAsnComponent },
              { path: 'update-asn', component: UpdateAsnComponent },
              { path: 'display-asn-list', component: DisplayAsnListComponent },
              { path: 'display-asn-info', component: DisplayAsnInfoComponent },
              { path: 'delete-asn', component: DeleteAsnComponent }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'staff-dashboard', component: StaffDashboardComponent,
    children: [
      { path: 'staff-info', component: StaffInfoComponent },
      {
        path: 'client-management', component: ClientManagementComponent,
        children: [
          { path: 'create-client', component: CreateClientComponent },
          { path: 'display-client-info', component: DisplayClientInfoComponent },
          { path: 'update-client', component: UpdateClientComponent },
          { path: 'display-clients-list', component: DisplayClientsListComponent },
          { path: 'delete-client', component: DeleteClientComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

