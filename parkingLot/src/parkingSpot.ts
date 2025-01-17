import { VechileType } from "./interface";
import { Vehicle } from "./vehicle";

export class ParkingSpot {
    private isOccupied: boolean = false;
    private vehicle: Vehicle | null;
    private parkingSpotType: number;
    private underMainteinance: boolean = false;
  
    constructor(spotType: VechileType) {
      this.parkingSpotType = spotType
      this.vehicle = null;
    }
  
    isUnderMaintenance() {
      return this.underMainteinance;
    }
  
    // isParkingType(vechileType: VechileType) {
    //   return this.parkingSpotType == vechileType;
    // }

    getParkingType() {
      return this.parkingSpotType;
    }
  
    park(vehicle: Vehicle,) {
      this.isOccupied = true;
      this.vehicle = vehicle;
    }
  
    getVehicle() {
      return this.vehicle;
    }
  
    isParkingOccupied() {
      return this.isOccupied;
    }
  
    release() {
      this.isOccupied = false;
      this.vehicle = null;
    }
  }