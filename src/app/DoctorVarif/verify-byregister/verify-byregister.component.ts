import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';
import { passwordValid } from 'src/app/validator/passwordValidator';

@Component({
  selector: 'app-verify-byregister',
  templateUrl: './verify-byregister.component.html',
  styleUrls: ['./verify-byregister.component.css'],
})
export class VerifyByregisterComponent {
  constructor(
    private doctorserviceService: DoctorserviceService,
    private router: Router
  ) {}

  changetype: boolean = true;
  visible: boolean = true;

  viewpassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  integerRegex = /^\d+$/;
  // emailRegex =
  //   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  registerForm = new FormGroup(
    {
      id: new FormControl('', Validators.required),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$'
        ),
        Validators.minLength(8),
      ]),
      confirm_password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$'
        ),
        Validators.minLength(8),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),

      generationDate: new FormControl('', Validators.required),
      consultFeeOnline: new FormControl('', Validators.required),
      offlineFee: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
    },
    [passwordValid('password', 'confirm_password')]
  );

  registerUser() {
    console.log(this.registerForm);
  }

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name);
  }

  // addDoctors(data: any) {
  //   this.doctorserviceService.postDoctor(data).subscribe((resp) => {
  //     console.warn(resp);
  //   });
  // }
  proceedregistration() {
    if (this.registerForm.valid) {
      this.doctorserviceService
        .postDoctor(this.registerForm.value)
        .subscribe((resp) => {
          console.warn(resp);
          this.router.navigate(['thankspage']);
        });
    } else {
      alert('Please enter valid data');
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.valid);
    } else {
      console.log('Details are missing');
    }
  }
}
