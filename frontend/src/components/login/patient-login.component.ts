import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
    selectUserDetails: ''
  });
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void { }


  onSubmit(): void {
    console.log(this.loginForm.value);
    sessionStorage.setItem('patientDetails', JSON.stringify(this.loginForm.value))
  }
}
