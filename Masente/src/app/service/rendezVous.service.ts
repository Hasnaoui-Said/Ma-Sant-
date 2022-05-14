import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {rendezVous} from '../model/rendezVous.model';
import {Observable} from 'rxjs';

@Injectable({providedIn:"root"})
export class RendezVousService {

  constructor(private http:HttpClient) { }

  getAllRendezVous():Observable<rendezVous[]> {
    let host=environment.host;
    return this.http.get<rendezVous[]>(host+"/rendezVous");
  }
  getRendezVousPatient(keyword:string | null):Observable<rendezVous[]> {
      let host=environment.host;
      return this.http.get<rendezVous[]>(host+"/rendezVousPatient/"+keyword);
  }
  getRendezVousDoctor(keyword:string | null):Observable<rendezVous[]> {
        let host=environment.host;
        return this.http.get<rendezVous[]>(host+"/rendezVousDoctor/"+keyword);
  }
  searchRendezVous(keyword:string):Observable<rendezVous[]> {
    let host=environment.host;
    return this.http.get<rendezVous[]>(host+"/rendezVous?datePlanification="+keyword);
  }
  deleteRendezVous(rendezVous:rendezVous):Observable<void> {
    let host=environment.host;
    return this.http.delete<void>(host+"/rendezVous/"+rendezVous.id);
  }
  save(rendezVous:rendezVous):Observable<rendezVous> {
    let host=environment.host;
    return this.http.post<rendezVous>(host+"/rendezVous",rendezVous);
  }
  getRendezVous(id:number):Observable<rendezVous> {
    let host=environment.host;
    return this.http.get<rendezVous>(host+"/rendezVous/"+id);
  }
  updateRendezVous(rendezVous:rendezVous):Observable<rendezVous> {
    let host=environment.host;
    return this.http.put<rendezVous>(host+"/rendezVous/"+rendezVous.id,rendezVous);
  }
}
