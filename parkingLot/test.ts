import { ParkingLot, VechileType } from "./main";
import { Ticket } from "./src/ticket";

const twoWheelerCapacity = 10; 
const fourWheelerCapacity = 10
const parkingLot = new ParkingLot(twoWheelerCapacity, fourWheelerCapacity);

console.log(parkingLot.status())
const ticketId = parkingLot.parkVehicle("12345", VechileType.fourWheeler)
const ticketId1 = parkingLot.parkVehicle("123456", VechileType.twoWheeler)
console.log(parkingLot.status())
parkingLot.releaseVehicle(ticketId)
console.log(parkingLot.status())

parkingLot.releaseVehicle(ticketId1)
console.log(parkingLot.status())
