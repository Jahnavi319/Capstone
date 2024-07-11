import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
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
