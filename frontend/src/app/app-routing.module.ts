import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { PatientLoginComponent } from '../components/login/patient-login.component';
import { PatientRegistrationComponent } from '../components/patient-registration/patient-registration.component';
import { DoctorDashboardComponent } from '../components/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from '../components/patient-dashboard/patient-dashboard.component';
import { AppointmentDetailsComponent } from '../components/appointment-details/appointment-details.component';
import { PatientDetailsComponent } from './component/patient-details/patient-details.component';
import { DoctorDetailsComponent } from './component/doctor-details/doctor-details.component';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { AddPatientComponent } from './component/add-patient/add-patient.component';

const routes: Routes = [
  { path: 'register', component: PatientRegistrationComponent },
  { path: 'login', component: PatientLoginComponent },
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'doctor', component: DoctorDashboardComponent },
  { path: 'new-appointment', component: AppointmentDetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'patient-details', component: PatientDetailsComponent },
  { path: 'new-patient', component: AddPatientComponent },
  { path: "new-doctor", component: AddDoctorComponent },
  { path: 'doctor-list', component: DoctorDetailsComponent },
  { path: '', redirectTo: '/patient-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
