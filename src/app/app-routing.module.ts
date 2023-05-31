import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Registrstion/register/register.component';
import { VerifyByregisterComponent } from './DoctorVarif/verify-byregister/verify-byregister.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './DoctorLogin/login/login.component';
import { GratitudepageComponent } from './thankyoupage/gratitudepage/gratitudepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: VerifyByregisterComponent },
  { path: 'details', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'thankspage', component: GratitudepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
