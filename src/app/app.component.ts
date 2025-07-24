// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingSpotListComponent } from './list-spots/list-spots.component';
import { ParkingSpotFormComponent } from './register-spot/register-spot.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    ToastModule,
    CardModule,
    DividerModule,
    ParkingSpotListComponent,
    ParkingSpotFormComponent
  ],
  template: `
    <div class="min-h-screen">
      <p-toolbar>
        <div class="p-toolbar-group-start">
          <h1 class="text-2xl font-bold">Parking Spot Management</h1>
        </div>
      </p-toolbar>
      
      <div class="grid p-4 gap-4">
        <div class="col-12 md:col-6">
          <div class="card p-4">
            <h2>Register New Parking Spot</h2>
            <p-divider></p-divider>
            <app-parking-spot-form 
              (formSubmit)="onFormSubmit()">
            </app-parking-spot-form>
          </div>
        </div>
        
        <div class="col-12 md:col-6">
          <div class="card p-4">
            <h2>Parking Spots List</h2>
            <p-divider></p-divider>
            <app-parking-spot-list></app-parking-spot-list>
          </div>
        </div>
      </div>
    </div>
    <p-toast></p-toast>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  onFormSubmit() {
    // This will be handled by the list component refresh
  }
}