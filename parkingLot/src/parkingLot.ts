import { VechileType } from "./interface";
import { ParkingSpot } from "./parkingSpot";
import { Ticket } from "./ticket";
import { Vehicle } from "./vehicle";

export class ParkingLot {
  private parkingSpots: ParkingSpot[] = [];
  private tickets: {[ticketId: string]: Ticket} = {}

  constructor(twoWheelerCapacity: number, fourWheelerCapacity: number) {
    for (let spot = 0; spot < twoWheelerCapacity; spot++) {
      this.parkingSpots.push(new ParkingSpot(VechileType.twoWheeler));
    }
    for (let spot = 0; spot < fourWheelerCapacity; spot++) {
      this.parkingSpots.push(new ParkingSpot(VechileType.fourWheeler));
    }
    console.log("parking lot created of spack", this.parkingSpots.length)
  }

  parkVehicle(vehicleNumber: string, vechileType: VechileType): string {
    for (let index in this.parkingSpots) {
      const spot = this.parkingSpots[index];
      // console.log(!spot.isParkingOccupied() && this.canPark(spot, vechileType))
      if (!spot.isParkingOccupied() && this.canPark(spot, vechileType)) {
        const vehicle = new Vehicle(vehicleNumber, vechileType);
        const ticket = new Ticket(vehicle.getVehicleNumber(), Number(index));
        this.tickets[ticket.getTicketId()] = ticket
        spot.park(vehicle);
        console.log(`Vehicle '${vehicle.getVehicleNumber()}' of type '${vehicle.getVechileType()}' parked successfully with ticketId '${ticket.getTicketId()}' `)
        return ticket.getTicketId();
      }
    }
    throw new Error("Parking Lot Full");
  }

  status() {
    const map: { [id: number]: number } = {};
    this.parkingSpots.forEach((spot) => {
      if (!spot.isParkingOccupied()) {
        if (map[spot.getParkingType()]) {
          map[spot.getParkingType()] += 1;
        } else map[spot.getParkingType()] = 1;
      }
    });
    return map;
  }

  releaseVehicle(ticketId: string) {
    if (!this.tickets[ticketId]) {
      console.log("Vehicle not found");
      return;
    }
    const ticket = this.tickets[ticketId] as Ticket;
    const position = ticket.getParkingSpot();
    const vehicle = this.parkingSpots[position].getVehicle() as Vehicle;
    this.parkingSpots[position].release();
    ticket.release();
    console.log(`Vehicle '${vehicle.getVehicleNumber()}' of type '${vehicle.getVechileType()}' release successfully with ticketId '${ticket.getTicketId()}' `)
  }

  private canPark(spot: ParkingSpot, vechileType: VechileType) {
    return spot.getParkingType() == vechileType && !spot.isUnderMaintenance();
  }
}

class payemnt {}
