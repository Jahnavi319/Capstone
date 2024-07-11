// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientdetailsService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientdetailsService {
  private patientDetails: any;

  setPatientDetails(details: any) {
    this.patientDetails = details;
  }

  getPatientDetails() {
    return this.patientDetails;
  }
}

