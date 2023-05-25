import { Component } from '@angular/core';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-verify-byregister',
  templateUrl: './verify-byregister.component.html',
  styleUrls: ['./verify-byregister.component.css'],
})
export class VerifyByregisterComponent {
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

  addDoctors(data: any) {
    this.doctorserviceService.postDoctor(data).subscribe((resp) => {
      console.warn(resp);
    });
  }
}
