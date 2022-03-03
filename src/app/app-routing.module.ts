import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { GlucometryreportComponent } from './glucometryreport/glucometryreport.component';
import { HeamatologyComponent } from './heamatology/heamatology.component';
import { HeamatologyreportComponent } from './heamatologyreport/heamatologyreport.component';
import { LabComponent } from './lab/lab.component';
import { RegisterComponent } from './register/register.component';
import { TestsampleComponent } from './testsample/testsample.component';
import { TestviewComponent } from './testview/testview.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
  {path:"registration",component:RegisterComponent} ,
  {path:"test",component:TestsampleComponent},
  {path:"lab",component:LabComponent},
  {path:"haematology",component:HeamatologyComponent},
  {path:"glucometry",component:GlucometryComponent},
  {path:'glucometryreport',component:GlucometryreportComponent},
  {path:'haemetologyreport',component:HeamatologyreportComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"userdetails",component:UserdetailsComponent},
  {path:"users",component:AdmindetailsComponent},
  {path:"getUser/:_id",component:EditdetailsComponent},
  {path:"viewSample",component:ViewdetailsComponent},
  {path:"testview",component:TestviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
