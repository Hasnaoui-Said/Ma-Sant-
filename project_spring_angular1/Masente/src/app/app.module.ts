import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ComponentsComponent } from './components/components.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorAddComponent } from './components/doctors/doctor-add/doctor-add.component';
import { DoctorEditComponent } from './components/doctors/doctor-edit/doctor-edit.component';
import { AdminAppComponent } from './components/admin-app/admin-app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientAddComponent } from './components/patients/patient-add/patient-add.component';
import { PatientEditComponent } from './components/patients/patient-edit/patient-edit.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { RendezVousAddComponent } from './components/rendez-vous/rendez-vous-add/rendez-vous-add.component';
import { RendezVousEditComponent } from './components/rendez-vous/rendez-vous-edit/rendez-vous-edit.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ConsultationAddComponent } from './components/consultation/consultation-add/consultation-add.component';
import { ConsultationEditComponent } from './components/consultation/consultation-edit/consultation-edit.component';
import { PatientLoginComponent } from './components/patients/patient-login/patient-login.component';
import { RendezVousPatientComponent } from './components/patients/rendez-vous-patient/rendez-vous-patient.component';
import { DoctorLoginComponent } from './components/doctors/doctor-login/doctor-login.component';
import { RendezVousDoctorComponent } from './components/doctors/rendez-vous-doctor/rendez-vous-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    //ComponentsComponent,
    NavBarComponent,

    HomeComponent,
    DoctorsComponent,
    DoctorAddComponent,
    DoctorEditComponent,
    AdminAppComponent,
    PatientsComponent,
    PatientAddComponent,
    PatientEditComponent,
    RendezVousComponent,
    RendezVousAddComponent,
    RendezVousEditComponent,
    ConsultationComponent,
    ConsultationAddComponent,
    ConsultationEditComponent,
    PatientLoginComponent,
    RendezVousPatientComponent,
    DoctorLoginComponent,
    RendezVousDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
