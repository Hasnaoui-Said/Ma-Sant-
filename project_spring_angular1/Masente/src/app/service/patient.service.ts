import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Patient} from '../model/patient.model';
import {Doctor} from '../model/doctor.model';
import {Observable} from 'rxjs';

@Injectable({providedIn:"root"})
export class PatientsService {
  constructor(private http:HttpClient) {

  }
  getAllDoctors():Observable<Doctor[]> {
    let host=environment.host;
    return this.http.get<Doctor[]>(host+"/patientDoctors");
  }
  searchDoctors(keyword:string):Observable<Doctor[]> {
    let host=environment.host;
    return this.http.get<Doctor[]>(host+"/patientDoctors?name_like="+keyword);
  }
  save(patient:Patient):Observable<Patient> {
    let host=environment.host;
    return this.http.post<Patient>(host+"/patientDoctors",patient);
  }
  getPatient(id:number):Observable<Doctor> {
    let host=environment.host;
    return this.http.get<Doctor>(host+"/doctors/"+id);
  }
  updatePatient(patient:Patient):Observable<Patient> {
    let host=environment.host;
    return this.http.put<Patient>(host+"/patientDoctors/"+patient.id,patient);
  }
  searchPatient(patient:Patient):Observable<Patient> {
    let host=environment.host;
    return this.http.get<Patient>(host+"/loginPatient?email="+patient.email+"&pswd="+patient.pswd);
  }
}
