import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms";
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.css']
})
export class AdminAppComponent implements OnInit {

  adminFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminFormGroup=this.fb.group({
      email:["",Validators.required],
      pswd:["",Validators.required]
    });
  }

  onLoginAdmin() {
      this.submitted=true;
      //if(this.adminFormGroup?.invalid) return;
      this.adminService.searchAdmin(this.adminFormGroup?.value).subscribe(data=>{
        if(data===null) {
          window.location.href = 'http://localhost:4200/admin';
        }else{
          window.location.href = 'http://localhost:4200/doctors';
        }
      });
  }

}
