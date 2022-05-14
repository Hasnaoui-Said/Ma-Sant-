import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { RendezVousService } from '../../../service/rendezVous.service';
import {rendezVous} from '../../../model/rendezVous.model';

@Component({
  selector: 'app-rendez-vous-edit',
  templateUrl: './rendez-vous-edit.component.html',
  styleUrls: ['./rendez-vous-edit.component.css']
})
export class RendezVousEditComponent implements OnInit {

  rendezVousId:number;
    rendezVousFormGroup?:FormGroup;
    private submitted:boolean=false;

    constructor(private activatedRoute:ActivatedRoute,
                  private rendezVousService:RendezVousService,
                  private fb:FormBuilder) {
        this.rendezVousId=activatedRoute.snapshot.params['id'];
      }

      ngOnInit(): void {
        this.rendezVousService.getRendezVous(this.rendezVousId).subscribe(rendezVous=>{
          this.rendezVousFormGroup=this.fb.group({
            id:[rendezVous.id,Validators.required],
            doctorId:[rendezVous.doctorId,Validators.required],
            patientId:[rendezVous.patientId,Validators.required],
            date:[rendezVous.date,Validators.required],
            datePlanification:[rendezVous.datePlanification,Validators.required],
          })
        });
      }

      onUpdateRendezVous() {
        this.rendezVousService.updateRendezVous(this.rendezVousFormGroup?.value).subscribe(data=>{
          alert("RendezVous est modifié avec succès!");
          if(sessionStorage.getItem('connect')=='patient') {
            window.location.href="http://localhost:4200/rendezVousPatient";
          }else{
            window.location.href="http://localhost:4200/rendezVousDoctors";
          }
        });
      }

}
