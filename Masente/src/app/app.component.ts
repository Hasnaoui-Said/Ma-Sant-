import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AdminService} from "./service/admin.service";
import {Router} from "@angular/router";
import {PatientsService} from "./service/patient.service";
import {DoctorsService} from "./service/doctors.service";
import {TraitementService} from "./service/traitement.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Masante';
  constructor(private traitement: TraitementService) { }

  ngOnInit(): void {
    this.isLogin();
  }
  isLogin() {
    let user = sessionStorage.getItem('connect');
    return !(user === null);
  }
  isLogins() {
    return this.traitement.islogin();
  }
  logOut() {
    sessionStorage.removeItem('connect');
  }


  user() {
    return sessionStorage.getItem('espace');
  }
}
