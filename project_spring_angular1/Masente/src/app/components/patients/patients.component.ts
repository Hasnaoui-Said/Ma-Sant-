import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../service/doctors.service';
import {Doctor} from '../../model/doctor.model';
import {Patient} from '../../model/patient.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {DataStateEnum, AppDataState} from '../../state/doctor.state'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  searchForm?:FormGroup;
  doctors$:Observable<AppDataState<Doctor[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;

    constructor(private doctorsService:DoctorsService, private router:Router,private fb:FormBuilder) {
      this.onGetAllDoctors();
    }

    ngOnInit(): void {
      this.searchForm=this.fb.group({
          keyword:["",Validators.required],
      })
    }

    onGetAllDoctors() {
      this.doctors$=this.doctorsService.getAllDoctors().pipe(
          map(data=>{
            return ({dataState:DataStateEnum.LOADED, data:data})
          }),
          startWith({dataState:DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
        );
    }

    onSearch() {
          this.doctors$=this.doctorsService.searchDoctors(this.searchForm?.value.keyword).pipe(
              map(data=>{
                return ({dataState:DataStateEnum.LOADED, data:data})
              }),
              startWith({dataState:DataStateEnum.LOADING}),
              catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
            );
      }

    onNewPatient() {
        this.router.navigateByUrl("/newPatient")
    }

    onEdit(p: Patient) {
          this.router.navigateByUrl("/editPatient/"+p.id)
    }

    onNewRendezVous(d: Doctor) {
      this.router.navigateByUrl("/newRendezVous/"+d.id)
    }
    isConnect(){
         if( sessionStorage.getItem('patientConnect')=='ok') return true;
         return false;
    }
    isNotConnect(){
         if( sessionStorage.getItem('patientNotConnect')=='ko') return true;
         return false;
    }

}
