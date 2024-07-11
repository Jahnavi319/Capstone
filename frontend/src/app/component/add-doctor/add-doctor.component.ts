import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  RegisterForm = this.fb.group({
    doctorId: '',
    doctorName: '',
    email: '',
    yearsOfExperience: '',
    specialization: '',

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
