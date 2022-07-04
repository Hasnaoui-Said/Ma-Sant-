import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../service/consultation.service';
import {Consultation} from '../../model/consultation.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import {DataStateEnum, AppDataState} from '../../state/consultation.state'

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  consultations$:Observable<AppDataState<Consultation[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private consultationService:ConsultationService, private router:Router) {
    this.onGetAllConsultations();
  }

  ngOnInit(): void { }

  onGetAllConsultations() {
    this.consultations$=this.consultationService.getAllConsultations().pipe(
        map(data=>{
          return ({dataState:DataStateEnum.LOADED, data:data})
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onSearch(dataForms: any) {
      this.consultations$=this.consultationService.searchConsultations(dataForms.keyword).pipe(
          map(data=>{
            return ({dataState:DataStateEnum.LOADED, data:data})
          }),
          startWith({dataState:DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
        );
  }

  onDelete(c: Consultation) {
    let v=confirm("Etes vous sure de supprimer cette consultation?");
    if(v==true)
    this.consultationService.deleteConsultation(c).subscribe(data=>{
      this.onGetAllConsultations();
    })
  }

  onNewConsultation() {
    this.router.navigateByUrl("/newConsultation")
  }

  onEdit(d: Consultation) {
      this.router.navigateByUrl("/editConsultation/"+d.id)
  }
}
