import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorserviceService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/doctors';

  getDoctorDetails() {
    return this.http.get<any>('http://localhost:3000/doctors');
  }

  getById(id: any) {
    return this.http.get<any>(this.url + '/' + id);
  }

  postDoctor(dataValue: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/doctors', dataValue);
  }

  deleteDoctor(id: any) {
    return this.http.delete('http://localhost:3000/doctors/' + id);
  }
}
