import { VehicleType } from "../data/common/vehicle-type.enum";
import { Vehicle } from "./vehicle";

export class Automobile extends Vehicle{
    vehicleType: VehicleType = VehicleType.SEDAN;
}