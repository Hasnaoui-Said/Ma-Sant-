import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  private bool: boolean = false;

  constructor() { }
  getBol(){
    return this.bool;
  }
  setBol(bool: boolean){
    this.bool = bool;
  }
  islogin() {
    return this.getBol();
  }
}
