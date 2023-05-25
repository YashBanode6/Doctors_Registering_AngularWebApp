import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  doctorsDetails: any;

  constructor(
    private doctorserviceService: DoctorserviceService,
    private route: ActivatedRoute
  ) {}

  ID: number = this.route.snapshot.params['id'];
  ngOnInit() {
    this.doctorsDetails = this.getDoctorsDetails();
  }

  getDoctorsDetails() {
    this.doctorserviceService.getDoctorDetails().subscribe((resp) => {
      this.doctorsDetails = resp;
      console.log('resp');
    });
  }
  deleteData(id: any) {
    this.doctorserviceService.deleteDoctor(id).subscribe((resp) => {
      console.warn('deleted' + resp);
      alert('deleted successfully' + id);
      window.location.reload();
    });
  }
}
