
import { Component, OnInit } from '@angular/core';
import { Automobile } from '../../_entities/automobile';
import { VehiclesService } from '../../_services/vehicles.service';

@Component({
  templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {    
    constructor(private vehiclesService: VehiclesService){}
        
    autos: Automobile[] = [];

    ngOnInit(){
        this.getAllAutomobiles();
    }

    getAllAutomobiles() {
        this.vehiclesService.getAutomobiles()
        .then( (data) => {
            console.log(data);
            this.autos = data;
        });
    }
}