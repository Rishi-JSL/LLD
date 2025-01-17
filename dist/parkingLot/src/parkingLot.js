"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLot = void 0;
const interface_1 = require("./interface");
const parkingSpot_1 = require("./parkingSpot");
const ticket_1 = require("./ticket");
const vehicle_1 = require("./vehicle");
class ParkingLot {
    parkingSpots = [];
    tickets = {};
    constructor(twoWheelerCapacity, fourWheelerCapacity) {
        for (let spot = 0; spot < twoWheelerCapacity; spot++) {
            this.parkingSpots.push(new parkingSpot_1.ParkingSpot(interface_1.VechileType.twoWheeler));
        }
        for (let spot = 0; spot < fourWheelerCapacity; spot++) {
            this.parkingSpots.push(new parkingSpot_1.ParkingSpot(interface_1.VechileType.fourWheeler));
        }
        console.log("parking lot created of spack", this.parkingSpots.length);
    }
    parkVehicle(vehicleNumber, vechileType) {
        for (let index in this.parkingSpots) {
            const spot = this.parkingSpots[index];
            // console.log(!spot.isParkingOccupied() && this.canPark(spot, vechileType))
            if (!spot.isParkingOccupied() && this.canPark(spot, vechileType)) {
                const vehicle = new vehicle_1.Vehicle(vehicleNumber, vechileType);
                const ticket = new ticket_1.Ticket(vehicle.getVehicleNumber(), Number(index));
                this.tickets[ticket.getTicketId()] = ticket;
                spot.park(vehicle);
                console.log(`Vehicle '${vehicle.getVehicleNumber()}' of type '${vehicle.getVechileType()}' parked successfully with ticketId '${ticket.getTicketId()}' `);
                return ticket.getTicketId();
            }
        }
        throw new Error("Parking Lot Full");
    }
    status() {
        const map = {};
        this.parkingSpots.forEach((spot) => {
            if (!spot.isParkingOccupied()) {
                if (map[spot.getParkingType()]) {
                    map[spot.getParkingType()] += 1;
                }
                else
                    map[spot.getParkingType()] = 1;
            }
        });
        return map;
    }
    releaseVehicle(ticketId) {
        if (!this.tickets[ticketId]) {
            console.log("Vehicle not found");
            return;
        }
        const ticket = this.tickets[ticketId];
        const position = ticket.getParkingSpot();
        const vehicle = this.parkingSpots[position].getVehicle();
        this.parkingSpots[position].release();
        ticket.release();
        console.log(`Vehicle '${vehicle.getVehicleNumber()}' of type '${vehicle.getVechileType()}' release successfully with ticketId '${ticket.getTicketId()}' `);
    }
    canPark(spot, vechileType) {
        return spot.getParkingType() == vechileType && !spot.isUnderMaintenance();
    }
}
exports.ParkingLot = ParkingLot;
class payemnt {
}
