import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  personDetail: any[] = [];

  constructor(private service: DoctorserviceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getDoctorDetails().subscribe((resp) => {
      this.personDetail = resp;
      console.warn(resp);
    });
  }

  // getAllDocs() {
  //   this.service.getDoctorDetails().subscribe((resp) => {
  //     this.personDetail = resp;
  //     console.warn(resp);
  //   });
  // }

  getbyID(id: any) {}
}
