import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { PatientsService } from '../../../service/patient.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  patientFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientFormGroup=this.fb.group({
      email:["",Validators.required],
      pswd:["",Validators.required]
    });
  }
  onLoginPatient() {
      this.submitted=true;
      this.patientsService.searchPatient(this.patientFormGroup?.value).subscribe(data=>{
        if(data==null) {
          window.location.href = 'http://localhost:4200/loginPatient';
        }else{

         // alert(data[0]);
          sessionStorage.setItem('patientConnect', 'ok');
          sessionStorage.setItem('connect', 'patient');
          sessionStorage.setItem('idPatient', data.id+"");
          window.location.href = 'http://localhost:4200/patientDoctors';
        }
      });
  }
}
