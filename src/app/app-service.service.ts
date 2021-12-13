import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  listAllDoctors(){
     return this.http.get('/api/doctor');
  }

  listAllSpecialties(){
    return this.http.get('/api/specialty');
  }

  createSpecialty(form:any){
    return this.http.post('/api/specialty', form);
  }

  createDoctor(form:any){
    return this.http.post('/api/doctor', form);
  }

  clinicBySpecialty(espec:any){
    espec = espec.toString();
    return this.http.get(`/api/clinics/${espec}`);
  }


}
