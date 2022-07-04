import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../service/doctors.service';
import {Doctor} from '../../model/doctor.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {DataStateEnum, AppDataState} from '../../state/doctor.state'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors$:Observable<AppDataState<Doctor[]>> | null=null;
  searchForm?:FormGroup;
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

  onDelete(d: Doctor) {
    let v=confirm("Etes vous sure de supprimer ce docteur?");
    if(v==true)
    this.doctorsService.deleteDoctor(d).subscribe(data=>{
      this.onGetAllDoctors();
    })
  }

  onNewDoctor() {
    this.router.navigateByUrl("/newDoctor")
  }

  onEdit(d: Doctor) {
      this.router.navigateByUrl("/editDoctor/"+d.id)
  }
  isConnect(){
      if( sessionStorage.getItem('doctorConnect')=='ok') return true;
      return false;
  }
  isNotConnect(){
      if( sessionStorage.getItem('doctorNotConnect')=='ko') return true;
      return false;
  }
}
