import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../../../service/rendezVous.service';
import {rendezVous} from '../../../model/rendezVous.model';
import {Doctor} from '../../../model/doctor.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import {DataStateEnum, AppDataState} from '../../../state/rendezVous.state'
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-rendez-vous-doctor',
  templateUrl: './rendez-vous-doctor.component.html',
  styleUrls: ['./rendez-vous-doctor.component.css']
})
export class RendezVousDoctorComponent implements OnInit {

  rendezVous$:Observable<AppDataState<rendezVous[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;
  searchForm?:FormGroup;
  idD:string | null;

  constructor(private rendezVousService:RendezVousService, private router:Router) {
    this.onGetRendezVousDoctor();
    this.idD="";
  }

  ngOnInit(): void {
  }

  onGetRendezVousDoctor() {
          this.idD=sessionStorage.getItem('idDoctor');
              this.rendezVous$=this.rendezVousService.getRendezVousDoctor(this.idD).pipe(
                  map(data=>{
                    return ({dataState:DataStateEnum.LOADED, data:data})
                  }),
                  startWith({dataState:DataStateEnum.LOADING}),
                  catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
                );
  }

  onSearch() {
     this.rendezVous$=this.rendezVousService.searchRendezVous(this.searchForm?.value.keyword).pipe(
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
       this.onGetRendezVousDoctor();
     })
  }

  onEdit(r: rendezVous) {
     this.router.navigateByUrl("/editRendezVous/"+r.id)
  }

  onNewConsultation(r: rendezVous){
    this.router.navigateByUrl("/newConsultation/"+r.id)
  }

}
