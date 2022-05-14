import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../../../service/rendezVous.service';
import {rendezVous} from '../../../model/rendezVous.model';
import {Doctor} from '../../../model/doctor.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import {DataStateEnum, AppDataState} from '../../../state/rendezVous.state'

@Component({
  selector: 'app-rendez-vous-patient',
  templateUrl: './rendez-vous-patient.component.html',
  styleUrls: ['./rendez-vous-patient.component.css']
})
export class RendezVousPatientComponent implements OnInit {

  rendezVous$:Observable<AppDataState<rendezVous[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;
  idP:string | null;

  constructor(private rendezVousService:RendezVousService, private router:Router) {
    this.onGetRendezVousPatient();
    this.idP="";
  }

  ngOnInit(): void {
    this.onGetAllRendezVous();
  }
  onGetAllRendezVous() {
        this.rendezVous$=this.rendezVousService.getAllRendezVous().pipe(
            map(data=>{
              return ({dataState:DataStateEnum.LOADED, data:data})
            }),
            startWith({dataState:DataStateEnum.LOADING}),
            catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
          );
      }

      allDoctorsPatient(){
        window.location.href="http://localhost:4200/patientDoctors";
      }
      onGetRendezVousPatient() {
        this.idP=sessionStorage.getItem('idPatient');
            this.rendezVous$=this.rendezVousService.getRendezVousPatient(this.idP).pipe(
                map(data=>{
                  return ({dataState:DataStateEnum.LOADED, data:data})
                }),
                startWith({dataState:DataStateEnum.LOADING}),
                catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
              );
          }

      onSearch(dataForms: any) {
          this.rendezVous$=this.rendezVousService.searchRendezVous(dataForms.keyword).pipe(
              map(data=>{
                return ({dataState:DataStateEnum.LOADED, data:data})
              }),
              startWith({dataState:DataStateEnum.LOADING}),
              catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
            );
      }

      onDelete(r: rendezVous) {
        let v=confirm("Etes vous sure de supprimer ce rendezVous?");
        if(v==true)
        this.rendezVousService.deleteRendezVous(r).subscribe(data=>{
          this.onGetRendezVousPatient();
        })
      }

      onNewRendezVous(d: Doctor) {
        this.router.navigateByUrl("/newRendezVous/"+d.id)
        this.onGetRendezVousPatient();
      }

      onEdit(r: rendezVous) {
          this.router.navigateByUrl("/editRendezVous/"+r.id)
      }
}
