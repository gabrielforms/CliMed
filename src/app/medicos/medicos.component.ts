import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  constructor(private service: AppServiceService) { }

  ngOnInit() {
    this.getDoctorsFromAPI();
  }

  getDoctorsFromAPI(){
    this.service.listAllDoctors().subscribe((Response) => {
      console.log('Reponse from API is ', Response)
    }, (error) => {
      console.log('Error is ', error);
    }
    )
  }



}
