export class Ticket {
    private ticketId: string;
    private vehicleId: string;
    private parkingStartTimeMs: number;
    private parkingEndTimeMs: number;
    private spotId: number;
    constructor(vechileId: string, parkingSpotId: number) { 
      this.ticketId = this.generateId();
      this.vehicleId = vechileId;  // foreignKey
      this.parkingStartTimeMs = Date.now();
      this.spotId = parkingSpotId; // foreignKey
      this.parkingEndTimeMs = -1
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
      return this.parkingStartTimeMs
    }
    getParkingEndTimeMs() {
      return this.parkingEndTimeMs
    }
    release() {
      this.parkingEndTimeMs = Date.now();
    }
    private generateId(): string {
      return Math.random().toString(36).substring(2, 15);
    }
  }