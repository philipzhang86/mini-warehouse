import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 导入FormsModule
import { HttpClientModule } from '@angular/common/http'; // 导入HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ClientInfoComponent } from './client-info/client-info.component';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { CreateClientComponent } from './client-management/create-client/create-client.component';
import { DisplayClientInfoComponent } from './client-management/display-client-info/display-client-info.component';
import { UpdateClientComponent } from './client-management/update-client/update-client.component';
import { DisplayClientsListComponent } from './client-management/display-clients-list/display-clients-list.component';
import { DeleteClientComponent } from './client-management/delete-client/delete-client.component';
import { AsnOperationsCenterComponent } from './asn-operations-center/asn-operations-center.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CreateProductComponent } from './product-dashboard/create-product/create-product.component';
import { DisplayProductListComponent } from './product-dashboard/display-product-list/display-product-list.component';
import { DisplayProductInfoComponent } from './product-dashboard/display-product-info/display-product-info.component';
import { UpdateProductComponent } from './product-dashboard/update-product/update-product.component';
import { DeleteProductComponent } from './product-dashboard/delete-product/delete-product.component';
import { AsnDashboardComponent } from './asn-dashboard/asn-dashboard.component';
import { CreateAsnComponent } from './asn-dashboard/create-asn/create-asn.component';
import { UpdateAsnComponent } from './asn-dashboard/update-asn/update-asn.component';
import { DisplayAsnListComponent } from './asn-dashboard/display-asn-list/display-asn-list.component';
import { FilterAsnPipe } from './asn-dashboard/display-asn-list/filter-asn.pipe'; // Import the pipe
import { fileURLToPath } from 'url';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientDashboardComponent,
    StaffDashboardComponent,
    ClientInfoComponent,
    StaffInfoComponent,
    ClientManagementComponent,
    CreateClientComponent,
    DisplayClientInfoComponent,
    UpdateClientComponent,
    DisplayClientsListComponent,
    DeleteClientComponent,
    AsnOperationsCenterComponent,
    ProductDashboardComponent,
    CreateProductComponent,
    DisplayProductListComponent,
    DisplayProductInfoComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AsnDashboardComponent,
    CreateAsnComponent,
    UpdateAsnComponent,
    DisplayAsnListComponent,
    FilterAsnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // 添加到imports数组中
    HttpClientModule // 添加到imports数组中
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
