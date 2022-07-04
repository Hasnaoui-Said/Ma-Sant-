import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Doctor} from '../model/doctor.model';
import {Observable} from 'rxjs';

@Injectable({providedIn:"root"})
export class DoctorsService {
  constructor(private http:HttpClient) {

  }
  getAllDoctors():Observable<Doctor[]> {
    let host=environment.host;
    return this.http.get<Doctor[]>(host+"/doctors");
  }
  searchDoctors(keyword:string):Observable<Doctor[]> {
      let host=environment.host;
      return this.http.get<Doctor[]>(host+"/doctorsserach?nom="+keyword);
  }
  searchLoginDoctors(doctor:Doctor):Observable<Doctor> {
     let host=environment.host;
     return this.http.get<Doctor>(host+"/loginDoctor?email="+doctor.email+"&pswd="+doctor.pswd);
  }
  deleteDoctor(doctor:Doctor):Observable<void> {
     let host=environment.host;
     return this.http.delete<void>(host+"/doctors/"+doctor.id);
  }
  save(doctor:Doctor):Observable<Doctor> {
       let host=environment.host;
       return this.http.post<Doctor>(host+"/doctors",doctor);
  }
  getDoctor(id:number):Observable<Doctor> {
         let host=environment.host;
         return this.http.get<Doctor>(host+"/doctors/"+id);
  }
  updateDoctor(doctor:Doctor):Observable<Doctor> {
           let host=environment.host;
           return this.http.put<Doctor>(host+"/doctors/"+doctor.id,doctor);
  }
}
