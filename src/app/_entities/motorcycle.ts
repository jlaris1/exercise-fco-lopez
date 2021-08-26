import { VehicleType } from "../data/common/vehicle-type.enum";
import { Vehicle } from "./vehicle";

export class Motorcycle extends Vehicle {
    vehicleType: VehicleType = VehicleType.MOTORCYCLE;
}