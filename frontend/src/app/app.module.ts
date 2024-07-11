// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
// import { PatientLoginComponent } from '../components/login/patient-login.component';
// import { PatientRegistrationComponent } from '../components/patient-registration/patient-registration.component';
// import { DoctorDashboardComponent } from '../components/doctor-dashboard/doctor-dashboard.component';
// import { PatientDashboardComponent } from '../components/patient-dashboard/patient-dashboard.component';
// import { AppointmentDetailsComponent } from '../components/appointment-details/appointment-details.component';
// import { PatientdetailsService } from './patientdetails.service';
// import { PatientDetailsComponent } from './component/patient-details/patient-details.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     PatientRegistrationComponent,
//     PatientLoginComponent,
//     PatientDashboardComponent,
//     AdminDashboardComponent,
//     DoctorDashboardComponent,
//     AppointmentDetailsComponent,
//     PatientDetailsComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule if you use HTTP services

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { PatientLoginComponent } from '../components/login/patient-login.component';
import { PatientRegistrationComponent } from '../components/patient-registration/patient-registration.component';
import { DoctorDashboardComponent } from '../components/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from '../components/patient-dashboard/patient-dashboard.component';
import { AppointmentDetailsComponent } from '../components/appointment-details/appointment-details.component';
import { PatientDetailsComponent } from './component/patient-details/patient-details.component';
import { AdminService } from './services/admin.service';
import { DoctorDetailsComponent } from './component/doctor-details/doctor-details.component';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { AddPatientComponent } from './component/add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    PatientLoginComponent,
    PatientRegistrationComponent,
    DoctorDashboardComponent,
    PatientDashboardComponent,
    AppointmentDetailsComponent,
    PatientDetailsComponent,
    DoctorDetailsComponent,
    AddDoctorComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // Include HttpClientModule if you use HTTP services
  ],
  providers: [
    AdminService // Provide your service here if it's a singleton service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
