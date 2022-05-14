import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { PatientsService } from '../../../service/patient.service';
import {Patient} from '../../../model/patient.model';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patientId:number;
  patientFormGroup?:FormGroup;
  private submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
              private patientsService:PatientsService,
              private fb:FormBuilder) {
    this.patientId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.patientsService.getPatient(this.patientId).subscribe(patient=>{
      this.patientFormGroup=this.fb.group({
        id:[patient.id,Validators.required],
        nom:[patient.nom,Validators.required],
        preNom:[patient.preNom,Validators.required],
        dateNaissance:[patient.dateNaissance,Validators.required],
        numTel:[patient.numTel,Validators.required],
        typeSexe:[patient.typeSexe,Validators.required],
        email:[patient.email,Validators.required],
        pswd:[patient.pswd,Validators.required],
      })
    });
  }

  onUpdatePatient() {
      this.patientsService.updatePatient(this.patientFormGroup?.value).subscribe(data=>{
        alert("Patient est modifié avec succès!");
      });
  }

}
