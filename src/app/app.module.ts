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
import { DeleteAsnComponent } from './asn-dashboard/delete-asn/delete-asn.component';
import { DisplayAsnInfoComponent } from './asn-dashboard/display-asn-info/display-asn-info.component';
import { AsnItemDashboardComponent } from './asn-item-dashboard/asn-item-dashboard.component';
import { CreateAsnItemComponent } from './asn-item-dashboard/create-asn-item/create-asn-item.component';
import { UpdateAsnItemComponent } from './asn-item-dashboard/update-asn-item/update-asn-item.component';
import { DisplayAsnItemListComponent } from './asn-item-dashboard/display-asn-item-list/display-asn-item-list.component';
import { DeleteAsnItemComponent } from './asn-item-dashboard/delete-asn-item/delete-asn-item.component';
import { InventoryDashboardComponent } from './staff-dashboard/inventory-dashboard/inventory-dashboard.component';
import { CreateInventoryItemComponent } from './staff-dashboard/inventory-dashboard/create-inventory-item/create-inventory-item.component';
import { DisplayInventoryItemInfoComponent } from './staff-dashboard/inventory-dashboard/display-inventory-item-info/display-inventory-item-info.component';
import { DisplayInventoryItemsListComponent } from './staff-dashboard/inventory-dashboard/display-inventory-items-list/display-inventory-items-list.component';
import { UpdateInventoryItemComponent } from './staff-dashboard/inventory-dashboard/update-inventory-item/update-inventory-item.component';
import { DeleteInventoryItemComponent } from './staff-dashboard/inventory-dashboard/delete-inventory-item/delete-inventory-item.component';
import { SendAsnComponent } from './asn-dashboard/send-asn/send-asn.component';



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
    FilterAsnPipe,
    DeleteAsnComponent,
    DisplayAsnInfoComponent,
    AsnItemDashboardComponent,
    CreateAsnItemComponent,
    UpdateAsnItemComponent,
    DisplayAsnItemListComponent,
    DeleteAsnItemComponent,
    InventoryDashboardComponent,
    CreateInventoryItemComponent,
    DisplayInventoryItemInfoComponent,
    DisplayInventoryItemsListComponent,
    UpdateInventoryItemComponent,
    DeleteInventoryItemComponent,
    SendAsnComponent,
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
