import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css'],
  exportAs: 'ngForm'
})
export class EspecialidadesComponent implements OnInit {
  dados: any;
  form!: any






  constructor(public service: AppServiceService) {
    var dados;
   }

  ngOnInit() {

    this.getSpecialtiesFromAPI();




  }

  getSpecialtiesFromAPI(){


    this.service.listAllSpecialties().subscribe((data:any) => {
      this.dados = data.results
      console.log(this.dados)


    }

    );



  }
  getForm(form:any){
    return this.service.createSpecialty(form).subscribe((result) => {
      console.warn(result);
    })
  }







}
