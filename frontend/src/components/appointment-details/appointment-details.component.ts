import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  AppointmentForm = this.formBuilder.group({
    fullName: '',
    dob: '',
    gender: '',
    contactInfo: '',
    symptoms: '',
    natureOfVisit: '',

  });
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void { }


  onSubmit(): void {
    console.log(this.AppointmentForm.value);
    sessionStorage.setItem('patientDetails', JSON.stringify(this.AppointmentForm.value))
    const modalElement = document.getElementById('confirmationModal');
    if (modalElement) {
      const myModal = new bootstrap.Modal(modalElement, {
        keyboard: false
      });
      myModal.show();
    }
  }

}


