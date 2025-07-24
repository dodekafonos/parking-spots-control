// src/app/parking-spot-form/parking-spot-form.component.ts
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParkingSpotCreateDto } from '../models/parking-spot.model';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ParkingSpotService } from '../services/parking-spot.service';

@Component({
  selector: 'app-parking-spot-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './register-spot.component.html'
})
export class ParkingSpotFormComponent {
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);
  private parkingSpotService = inject(ParkingSpotService);

  @Output() formSubmit = new EventEmitter<void>();

  parkingSpotForm = this.fb.group({
    parkingSpotNumber: ['', [Validators.required, Validators.maxLength(10)]],
    licensePlateCar: ['', [Validators.required, Validators.maxLength(7)]],
    brandCar: ['', [Validators.required, Validators.maxLength(70)]],
    modelCar: ['', [Validators.required, Validators.maxLength(70)]],
    colorCar: ['', [Validators.required, Validators.maxLength(70)]],
    responsibleName: ['', [Validators.required, Validators.maxLength(130)]],
    apartment: ['', [Validators.required, Validators.maxLength(30)]],
    block: ['', [Validators.required, Validators.maxLength(30)]]
  });

  onSubmit(): void {
    if (this.parkingSpotForm.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Validation',
        detail: 'Please fill all required fields correctly'
      });
      return;
    }

    const formValue = this.parkingSpotForm.value as ParkingSpotCreateDto;

    this.parkingSpotService.createParkingSpot(formValue).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Parking spot created successfully'
        });
        this.parkingSpotForm.reset();
        this.formSubmit.emit();
      },
      error: (err) => {
        console.error('Error creating parking spot', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'Failed to create parking spot'
        });
      }
    });
  }
}