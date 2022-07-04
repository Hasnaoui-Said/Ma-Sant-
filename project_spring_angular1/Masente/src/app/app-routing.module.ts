import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DoctorAddComponent } from './components/doctors/doctor-add/doctor-add.component';
import { DoctorEditComponent } from './components/doctors/doctor-edit/doctor-edit.component';
import { AdminAppComponent } from './components/admin-app/admin-app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientAddComponent } from './components/patients/patient-add/patient-add.component';
import { PatientEditComponent } from './components/patients/patient-edit/patient-edit.component';
import { PatientLoginComponent } from './components/patients/patient-login/patient-login.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ConsultationAddComponent } from './components/consultation/consultation-add/consultation-add.component';
import { ConsultationEditComponent } from './components/consultation/consultation-edit/consultation-edit.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { RendezVousAddComponent } from './components/rendez-vous/rendez-vous-add/rendez-vous-add.component';
import { RendezVousEditComponent } from './components/rendez-vous/rendez-vous-edit/rendez-vous-edit.component';
import { RendezVousPatientComponent } from './components/patients/rendez-vous-patient/rendez-vous-patient.component';
import { DoctorLoginComponent } from './components/doctors/doctor-login/doctor-login.component';
import { RendezVousDoctorComponent } from './components/doctors/rendez-vous-doctor/rendez-vous-doctor.component';

const routes: Routes = [
  { path: "doctors", component:DoctorsComponent },
  { path: "newDoctor", component:DoctorAddComponent },
  { path: "editDoctor/:id", component:DoctorEditComponent },
  { path: "", component:HomeComponent },
  { path: "admin", component:AdminAppComponent },
  { path: "patientDoctors", component:PatientsComponent },
  { path: "newPatient", component:PatientAddComponent },
  { path: "editPatient/:id", component:PatientEditComponent },
  { path: "loginPatient", component:PatientLoginComponent },
  { path: "consultations", component:ConsultationComponent },
  { path: "newConsultation/:id", component:ConsultationAddComponent },
  { path: "editConsultation/:id", component:ConsultationEditComponent },
  { path: "rendezVous", component:RendezVousComponent },
  { path: "newRendezVous/:idDoctor", component:RendezVousAddComponent },
  { path: "editRendezVous/:id", component:RendezVousEditComponent },
  { path: "rendezVousPatient", component:RendezVousPatientComponent },
  { path: "loginDoctor", component:DoctorLoginComponent },
  { path: "rendezVousDoctors", component:RendezVousDoctorComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
