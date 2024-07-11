import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  patientDetails: any;

  ngOnInit() {
    const details = sessionStorage.getItem('patientDetails');
    if (details) {
      this.patientDetails = JSON.parse(details);
    }
  }
}
