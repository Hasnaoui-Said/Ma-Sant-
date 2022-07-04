import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { ConsultationService } from '../../../service/consultation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-consultation-add',
  templateUrl: './consultation-add.component.html',
  styleUrls: ['./consultation-add.component.css']
})
export class ConsultationAddComponent implements OnInit {

  rendezVousId:number;
  consultationFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute, private fb:FormBuilder, private consultationService:ConsultationService) {
    this.rendezVousId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.consultationFormGroup=this.fb.group({
      rendezVousId:[this.rendezVousId,Validators.required],
      description:["",Validators.required],
      dateConsultation:["",Validators.required],
    });
  }
  onSaveConsultation() {
      this.submitted=true;
      if(this.consultationFormGroup?.invalid) return;
      this.consultationService.save(this.consultationFormGroup?.value).subscribe(data=>{
        alert("Consultation ajouté avec succès");
        window.location.href="http://localhost:4200/rendezVousDoctors";
      });
  }

}
