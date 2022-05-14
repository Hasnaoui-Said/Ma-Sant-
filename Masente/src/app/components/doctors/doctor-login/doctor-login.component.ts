import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { DoctorsService } from '../../../service/doctors.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  doctorLoginFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private doctorsService:DoctorsService) { }

  ngOnInit(): void {
      this.doctorLoginFormGroup=this.fb.group({
        email:["",Validators.required],
        pswd:["",Validators.required]
      });
  }

  onLoginDoctor() {
        this.submitted=true;
        this.doctorsService.searchLoginDoctors(this.doctorLoginFormGroup?.value).subscribe(data=>{
          if(data==null) {
            window.location.href = 'http://localhost:4200/loginDoctor';
          }else{
            sessionStorage.setItem('doctorConnect', 'ok');
            sessionStorage.setItem('connect', 'doctor');
            sessionStorage.setItem('idDoctor', data.id+"");
            window.location.href = 'http://localhost:4200/rendezVousDoctors';
          }
        });
  }

}
