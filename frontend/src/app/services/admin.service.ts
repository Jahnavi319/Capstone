import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3036/api/admin'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  registerPatient(patientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/patients`, patientData);
  }

  getPatientDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/patients`);
  }
}
