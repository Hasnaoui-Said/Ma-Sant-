import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { DoctorsService } from '../../../service/doctors.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {

  doctorFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private doctorsService:DoctorsService) { }

  ngOnInit(): void {
    this.doctorFormGroup=this.fb.group({
      nom:["",Validators.required],
      preNom:["",Validators.required],
      dateNaissance:["",Validators.required],
      numTel:["",Validators.required],
      typeSexe:["",Validators.required],
      email:["",Validators.required],
      pswd:["",Validators.required],
      specialite:["",Validators.required],
    });
  }

  onSaveDoctor() {
    this.submitted=true;
    if(this.doctorFormGroup?.invalid) return;
    this.doctorsService.save(this.doctorFormGroup?.value).subscribe(data=>{
      alert("Doctoeur ajouté avec succès");
      window.location.href="http://localhost:4200/doctors"
    });
  }
}
