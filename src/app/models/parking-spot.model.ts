// src/app/models/parking-spot.model.ts
export interface ParkingSpot {
  id: string;
  parkingSpotNumber: string;
  licensePlateCar: string;
  brandCar: string;
  modelCar: string;
  colorCar: string;
  registrationDate: string; // We'll handle this as string and potentially convert to Date later
  responsibleName: string;
  apartment: string;
  block: string;
}

export interface ParkingSpotCreateDto {
  parkingSpotNumber: string;
  licensePlateCar: string;
  brandCar: string;
  modelCar: string;
  colorCar: string;
  responsibleName: string;
  apartment: string;
  block: string;
}