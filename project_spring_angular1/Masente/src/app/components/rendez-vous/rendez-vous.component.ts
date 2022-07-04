import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../../service/rendezVous.service';
import {rendezVous} from '../../model/rendezVous.model';
import {Doctor} from '../../model/doctor.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import {DataStateEnum, AppDataState} from '../../state/rendezVous.state'

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  rendezVous$:Observable<AppDataState<rendezVous[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;
  idP:string | null;

  constructor(private rendezVousService:RendezVousService, private router:Router) {
    this.onGetRendezVousPatient();
    this.idP="";
  }

  ngOnInit(): void { }

  onGetAllRendezVous() {
      this.rendezVous$=this.rendezVousService.getAllRendezVous().pipe(
          map(data=>{
            return ({dataState:DataStateEnum.LOADED, data:data})
          }),
          startWith({dataState:DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
        );
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
        this.onGetAllRendezVous();
      })
    }

    onNewRendezVous(d: Doctor) {
      this.router.navigateByUrl("/newRendezVous/"+d.id)
    }

    onEdit(r: rendezVous) {
        this.router.navigateByUrl("/editRendezVous/"+r.id)
    }

}
