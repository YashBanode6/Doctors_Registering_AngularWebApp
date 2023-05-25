import { Component } from '@angular/core';
import { passwordValid } from './validator/passwordValidator';
import { DoctorserviceService } from './service/doctorservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DoctorsRegistration';

  constructor(private doctorserviceService: DoctorserviceService) {}

  form = {
    mobile: '',
    email: '',
    name: '',
    password: '',
    conform_password: '',
    date: '',
    degree: '',
    fee: '',
    personalFee: '',
  };

  integerRegex = /^\d+$/;
  emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  registerUser() {
    console.log(this.form);
  }

  addDoctors() {}
}
