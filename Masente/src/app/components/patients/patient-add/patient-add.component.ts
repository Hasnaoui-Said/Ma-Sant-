import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { PatientsService } from '../../../service/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  patientFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientFormGroup=this.fb.group({
      nom:["",Validators.required],
      preNom:["",Validators.required],
      dateNaissance:["",Validators.required],
      numTel:["",Validators.required],
      typeSexe:["",Validators.required],
      email:["",Validators.required],
      pswd:["",Validators.required],
    });
  }
  onSavePatient() {
      this.submitted=true;
      if(this.patientFormGroup?.invalid) return;
      this.patientsService.save(this.patientFormGroup?.value).subscribe(data=>{
        alert("Patient ajouté avec succès");
      });
    }

}
