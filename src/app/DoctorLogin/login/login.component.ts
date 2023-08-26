import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private doctorservice: DoctorserviceService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  userdata: any = [];
  userlogin = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedLogin() {
    if (this.userlogin.valid) {
      this.doctorservice.getById(this.userlogin.value.id).subscribe((resp) => {
        this.userdata = resp;

        if (this.userdata.password === this.userlogin.value.password) {
          sessionStorage.setItem('username', this.userdata.id);
          sessionStorage.setItem('userrole', this.userdata.degree);
          console.log(this.userdata);
          this.router.navigate(['usercard']);
        } else {
          alert('invalid username/password, try again');
          this.router.navigate(['/register']);
        }
      });
    }
  }

  /////////////    Password Show And Hide ////////////////////

  changetype: boolean = true;
  visible: boolean = true;

  viewpassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
