import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  // patientDetails: any[] = [];

  // constructor(private adminService: AdminService) { }

  // ngOnInit(): void {
  //   this.fetchPatientDetails();
  // }

  // fetchPatientDetails(): void {
  //   this.adminService.getPatientDetails().subscribe(data => {
  //     this.patientDetails = data;
  //   });
  // }
}