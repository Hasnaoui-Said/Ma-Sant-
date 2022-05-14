import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { DoctorsService } from '../../../service/doctors.service';
import {Doctor} from '../../../model/doctor.model';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  doctorId:number;
  doctorFormGroup?:FormGroup;
  private submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
              private doctorsService:DoctorsService,
              private fb:FormBuilder) {
    this.doctorId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.doctorsService.getDoctor(this.doctorId).subscribe(doctor=>{
      this.doctorFormGroup=this.fb.group({
        id:[doctor.id,Validators.required],
        nom:[doctor.nom,Validators.required],
        preNom:[doctor.preNom,Validators.required],
        dateNaissance:[doctor.dateNaissance,Validators.required],
        numTel:[doctor.numTel,Validators.required],
        typeSexe:[doctor.typeSexe,Validators.required],
        email:[doctor.email,Validators.required],
        specialite:[doctor.specialite,Validators.required],
      })
    });
  }

  onUpdateDoctor() {
    this.doctorsService.updateDoctor(this.doctorFormGroup?.value).subscribe(data=>{
      alert("Docteur est modifié avec succès!");
      window.location.href="http://localhost:4200/doctors";
    });
  }
}
