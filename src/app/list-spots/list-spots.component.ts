// src/app/parking-spot-list/parking-spot-list.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { ParkingSpotService } from '../services/parking-spot.service';
import { ParkingSpot } from '../models/parking-spot.model';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-parking-spot-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './list-spots.component.html'
})
export class ParkingSpotListComponent {
  parkingSpots: ParkingSpot[] = [];
  @Output() editParkingSpot = new EventEmitter<string>();

  constructor(private parkingSpotService: ParkingSpotService) {}

  ngOnInit(): void {
    this.loadParkingSpots();
  }

  loadParkingSpots(): void {
    this.parkingSpotService.getAllParkingSpots().subscribe({
      next: (data) => this.parkingSpots = data,
      error: (err) => console.error('Error loading parking spots', err)
    });
  }

  onEdit(id: string): void {
    this.editParkingSpot.emit(id);
  }

  deleteParkingSpot(id: string): void {
    if (confirm('Are you sure you want to delete this parking spot?')) {
      this.parkingSpotService.deleteParkingSpot(id).subscribe({
        next: () => this.loadParkingSpots(),
        error: (err) => console.error('Error deleting parking spot', err)
      });
    }
  }
}