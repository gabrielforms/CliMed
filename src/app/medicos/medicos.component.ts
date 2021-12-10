import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { AppServiceService } from '../app-service.service';

var dados: { data: Object; };

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  dados: any;





  constructor(public service: AppServiceService) {
    var dados;
   }

  ngOnInit() {

    this.getDoctorsFromAPI();




  }

  getDoctorsFromAPI(){


    this.service.listAllDoctors().subscribe((data:any) => {
      this.dados = data.results
      console.log(this.dados)


    }

    );



  }
  getForm(form:any){
    return this.service.createDoctor(form).subscribe((result) => {
      console.warn(result);
    })

  }





}
