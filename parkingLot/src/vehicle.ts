import { VechileType } from "./interface";

export class Vehicle {
    private vehicleId: string
    private wheels: number;
    constructor(vehicleNumber: string, vechileType: VechileType) {
        this.vehicleId = vehicleNumber
        this.wheels = vechileType;
    }

  getVehicleNumber() {
    return this.vehicleId;
  }
  getVechileType() {
    return this.wheels;
  }
}