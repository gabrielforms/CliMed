import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';




@Component({
  selector: 'app-byspecialty',
  templateUrl: './byspecialty.component.html',
  styleUrls: ['./byspecialty.component.css'],
  exportAs: 'ngForm'
})
export class BySpecialtyComponent implements OnInit {
  dados: any;
  form!: any;






  constructor(public service: AppServiceService) {
    var dados;
   }

  ngOnInit() {

    return this.sendDados();



  }

  sendDados(){
    return this.dados;
  }



  getForm(form:any){
    return this.service.clinicBySpecialty(form).subscribe((result)=>{
      this.dados = result;
      console.log(form)
      console.warn(result);
    })
  }







}
