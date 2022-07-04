import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Admin} from '../model/admin.model';
import {Observable} from 'rxjs';

@Injectable({providedIn:"root"})
export class AdminService {
  constructor(private http:HttpClient) {

  }
  searchAdmin(admin:Admin):Observable<Admin[]> {
      let host=environment.host;
      return this.http.get<Admin[]>(host+"/admin?email="+admin.email+"&pswd="+admin.pswd);
  }
}
