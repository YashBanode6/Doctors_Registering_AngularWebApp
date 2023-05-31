import { Component } from '@angular/core';
import { passwordValid } from './validator/passwordValidator';
import { DoctorserviceService } from './service/doctorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DoctorsRegistration';

  ismenurequired = false;

  constructor(private route: Router) {}

  ngDoCheck(): void {
    let currentroute = this.route.url;
    // let role = sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
  }
}
