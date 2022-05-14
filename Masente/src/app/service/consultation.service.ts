import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Consultation} from '../model/consultation.model';
import {Observable} from 'rxjs';

@Injectable({providedIn:"root"})
export class ConsultationService {

  constructor(private http:HttpClient) { }

  getAllConsultations():Observable<Consultation[]> {
    let host=environment.host;
    return this.http.get<Consultation[]>(host+"/consultations");
  }
  searchConsultations(keyword:string):Observable<Consultation[]> {
      let host=environment.host;
      return this.http.get<Consultation[]>(host+"/consultations?dateConsultation="+keyword);
  }
  deleteConsultation(consultation:Consultation):Observable<void> {
     let host=environment.host;
     return this.http.delete<void>(host+"/consultations/"+consultation.id);
  }
  save(consultation:Consultation):Observable<Consultation> {
       let host=environment.host;
       return this.http.post<Consultation>(host+"/consultations",consultation);
  }
  getConsultation(id:number):Observable<Consultation> {
         let host=environment.host;
         return this.http.get<Consultation>(host+"/consultations/"+id);
  }
  updateConsultation(consultation:Consultation):Observable<Consultation> {
           let host=environment.host;
           return this.http.put<Consultation>(host+"/consultations/"+consultation.id,consultation);
  }
}
