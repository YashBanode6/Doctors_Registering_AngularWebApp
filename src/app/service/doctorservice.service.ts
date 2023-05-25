import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorserviceService {
  constructor(private http: HttpClient) {}

  getDoctorDetails() {
    return this.http.get<any>('http://localhost:3000/doctors');
  }

  postDoctor(dataValue: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/doctors', dataValue);
  }

  deleteDoctor(id: any) {
    return this.http.delete('http://localhost:3000/doctors/' + id);
  }
}
