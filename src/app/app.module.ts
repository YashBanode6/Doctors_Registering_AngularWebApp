import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Registrstion/register/register.component';
import { VerifyByregisterComponent } from './DoctorVarif/verify-byregister/verify-byregister.component';
import { LoginComponent } from './DoctorLogin/login/login.component';
import { GratitudepageComponent } from './thankyoupage/gratitudepage/gratitudepage.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, VerifyByregisterComponent, LoginComponent, GratitudepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
