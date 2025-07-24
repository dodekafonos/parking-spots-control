// src/app/services/parking-spot.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParkingSpot, ParkingSpotCreateDto } from '../models/parking-spot.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/parking-spot`;

  getAllParkingSpots() {
    return this.http.get<ParkingSpot[]>(this.apiUrl);
  }

  getParkingSpotById(id: string) {
    return this.http.get<ParkingSpot>(`${this.apiUrl}/${id}`);
  }

  createParkingSpot(parkingSpot: ParkingSpotCreateDto) {
    return this.http.post<ParkingSpot>(this.apiUrl, parkingSpot);
  }

  updateParkingSpot(id: string, parkingSpot: ParkingSpotCreateDto) {
    return this.http.put<ParkingSpot>(`${this.apiUrl}/${id}`, parkingSpot);
  }

  deleteParkingSpot(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}