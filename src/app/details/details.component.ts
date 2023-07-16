import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
 
  <article>
    
  <img class="listing-photo" [src]="housingLocation?.photo"  alt="Exterior photo of {{housingLocation?.name}}"/>
   
  <section class="listing-description">
      <h4 class="listing-heading">{{housingLocation?.name}}</h4>
      <p class="listing-location" > <i class="fa-solid fa-location-dot"></i>{{housingLocation?.city}}, {{housingLocation?.state}} </p>
    </section>

    <section class="listing-features">
      <h6 class="section-heading">About this housing location</h6>
      <p class="listing-description">{{housingLocation?.description}}</p>
    </section>

 <div class="container">
  <div class="column">
    <ul class="details-list">
      <li><i class="fa fa-bed" ></i> Rooms: {{housingLocation?.availableUnits}}</li>
      <li><i class="fas fa-wifi"></i> Wifi: {{housingLocation?.wifi}}</li>
      <li><i class="fas fa-tshirt"></i> Laundry: {{housingLocation?.laundry}}</li>
      <li><i class="fas fa-utensils"></i> Kitchen: {{housingLocation?.kitchen}}</li>
    </ul>
  </div>
  <div class="column">
    <ul class="details-list">
      <li><i class="fas fa-tv"></i> Tv: {{housingLocation?.tv}}</li>
      <li><i class="fas fa-couch"></i> Patio/Balcony: {{housingLocation?.patio}}</li>
      <li><i class="fas fa-car"></i> Parking: {{housingLocation?.parking}}</li>
      <li><i class="fas fa-paw"></i> Pets Allowed: {{housingLocation?.pets}}</li>
    </ul>
  </div>
</div>

      
    <section class="listing-apply">
     
      <form [formGroup]="applyForm" (submit)="submitApplication()">
      
      <label for="Check-in">Check in</label> <input id="Check-in" type="date" formControlName="checkIn">
      <label for="Check-out">Check out</label> <input id="Check-out" type="date" formControlName="checkOut">
      <label for="Guests">Guests</label> <input id="Guests" type="number" formControlName="adults">
     <button type="submit" class="primary">Reserve Now</button>
        
      </form>
     
    </section>
    </article>

`,
  styleUrls: ['./details.component.css']
})

  export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

    }



