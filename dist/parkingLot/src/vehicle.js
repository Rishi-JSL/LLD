"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    vehicleId;
    wheels;
    constructor(vehicleNumber, vechileType) {
        this.vehicleId = vehicleNumber;
        this.wheels = vechileType;
    }
    getVehicleNumber() {
        return this.vehicleId;
    }
    getVechileType() {
        return this.wheels;
    }
}
exports.Vehicle = Vehicle;
