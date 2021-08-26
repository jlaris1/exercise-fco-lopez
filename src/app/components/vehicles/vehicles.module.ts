import { NgModule } from "@angular/core";
import { VehiclesService } from "../../_services/vehicles.service";
import { VehiclesComponent } from "./vehicles.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        VehiclesComponent
    ],
    imports: [CommonModule],
    providers: [VehiclesService],
})

export class VehiclesModule { }
