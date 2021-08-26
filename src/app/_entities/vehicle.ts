import { VehicleType } from "../data/common/vehicle-type.enum";

export class Vehicle {
    id: number;
    tireNumber: number;
    engine: string;
    vehicleType: VehicleType;
}