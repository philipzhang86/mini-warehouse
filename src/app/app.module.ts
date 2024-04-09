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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientDashboardComponent,
    StaffDashboardComponent,
    ClientInfoComponent,
    StaffInfoComponent
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
