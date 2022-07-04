import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { RendezVousService } from '../../../service/rendezVous.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendez-vous-add',
  templateUrl: './rendez-vous-add.component.html',
  styleUrls: ['./rendez-vous-add.component.css']
})
export class RendezVousAddComponent implements OnInit {

  DoctorId:number;
  rendezVousFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder, private rendezVousService:RendezVousService) {
    this.DoctorId=activatedRoute.snapshot.params['idDoctor'];
  }

  ngOnInit(): void {
    this.rendezVousFormGroup=this.fb.group({
      patientId:[sessionStorage.getItem('idPatient'),Validators.required],
      doctorId:[this.DoctorId,Validators.required],
      date:["",Validators.required],
      datePlanification:["",Validators.required],
    });
  }

  onSaveRendezVous() {
      this.submitted=true;
      if(this.rendezVousFormGroup?.invalid) return;
      this.rendezVousService.save(this.rendezVousFormGroup?.value).subscribe(data=>{
        alert("RendezVous ajouté avec succès");
        window.location.href="http://localhost:4200/rendezVousPatient";
      });
    }
}
