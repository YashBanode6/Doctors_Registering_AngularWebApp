import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
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
    private builder: FormBuilder,
    private router: Router
  ) {}

  integerRegex = /^\d+$/;
  emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  public inputType: string = 'password';

  public showPassword(event: any): void {
    if (event.target.checked) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  registerForm = this.builder.group(
    {
      id: this.builder.control('', Validators.required),
      mobile: this.builder.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(this.integerRegex),
      ]),
      name: this.builder.control('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(6),
      ]),
      password: this.builder.control('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$'
        ),
        Validators.minLength(8),
      ]),
      confirm_password: this.builder.control('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$'
        ),
        Validators.minLength(8),
      ]),
      email: this.builder.control('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),

      generationDate: this.builder.control('', Validators.required),
      consultFeeOnline: this.builder.control('', Validators.required),
      offlineFee: this.builder.control('', Validators.required),
      degree: this.builder.control('', Validators.required),
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
          this.router.navigate(['Login']);
        });
    } else {
      console.warn('Please enter valid data');
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
