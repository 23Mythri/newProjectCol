import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TestsampleComponent } from './testsample/testsample.component';
import { HeamatologyComponent } from './heamatology/heamatology.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabComponent } from './lab/lab.component';
import { GlucometryreportComponent } from './glucometryreport/glucometryreport.component';
import { HeamatologyreportComponent } from './heamatologyreport/heamatologyreport.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { TestviewComponent } from './testview/testview.component';
 



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TestsampleComponent,
    HeamatologyComponent,
    GlucometryComponent,
    LabComponent,
    GlucometryreportComponent,
    HeamatologyreportComponent,
    AdminLoginComponent,
    UserdetailsComponent,
    AdmindetailsComponent,
    EditdetailsComponent,
    ViewdetailsComponent,
    TestviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
