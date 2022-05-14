import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { ConsultationService } from '../../../service/consultation.service';
import {Consultation} from '../../../model/consultation.model';

@Component({
  selector: 'app-consultation-edit',
  templateUrl: './consultation-edit.component.html',
  styleUrls: ['./consultation-edit.component.css']
})
export class ConsultationEditComponent implements OnInit {

  consultationId:number;
  consultationFormGroup?:FormGroup;
  private submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
                private consultationService:ConsultationService,
                private fb:FormBuilder) {
      this.consultationId=activatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
      this.consultationService.getConsultation(this.consultationId).subscribe(consultation=>{
        this.consultationFormGroup=this.fb.group({
          id:[consultation.id,Validators.required],
          dateConsultation:[consultation.dateConsultation,Validators.required],
        })
      });
    }

    onUpdateConsultation() {
      this.consultationService.updateConsultation(this.consultationFormGroup?.value).subscribe(data=>{
        alert("Consultation est modifié avec succès!");
      });
    }

}
