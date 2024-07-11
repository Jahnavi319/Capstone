import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  RegisterForm = this.fb.group({
    fullName: '',
    dateOfBirth: '',
    selectgender: '',
    contactNumber: '',
    email: '',
    password: '',

  });
  constructor(
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void { }


  onSubmit(): void {
    console.log(this.RegisterForm.value);
    // sessionStorage.setItem('patientDetails', JSON.stringify(this.patientRegistationForm.value))
  }
}
