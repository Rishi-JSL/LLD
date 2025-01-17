"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
class Ticket {
    ticketId;
    vehicleId;
    parkingStartTimeMs;
    parkingEndTimeMs;
    spotId;
    constructor(vechileId, parkingSpotId) {
        this.ticketId = this.generateId();
        this.vehicleId = vechileId; // foreignKey
        this.parkingStartTimeMs = Date.now();
        this.spotId = parkingSpotId; // foreignKey
        this.parkingEndTimeMs = -1;
    }
    getParkingSpot() {
        return this.spotId;
    }
    getVehiclId() {
        return this.vehicleId;
    }
    getTicketId() {
        return this.ticketId;
    }
    getParkingStartTimeMs() {
        return this.parkingStartTimeMs;
    }
    getParkingEndTimeMs() {
        return this.parkingEndTimeMs;
    }
    release() {
        this.parkingEndTimeMs = Date.now();
    }
    generateId() {
        return Math.random().toString(36).substring(2, 15);
    }
}
exports.Ticket = Ticket;
