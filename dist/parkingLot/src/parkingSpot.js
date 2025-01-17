"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpot = void 0;
class ParkingSpot {
    isOccupied = false;
    vehicle;
    parkingSpotType;
    underMainteinance = false;
    constructor(spotType) {
        this.parkingSpotType = spotType;
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
    park(vehicle) {
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
exports.ParkingSpot = ParkingSpot;
