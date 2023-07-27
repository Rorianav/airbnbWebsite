import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HousingLocationComponent } from '../housing-location/housing-location.component';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
 
  <article>
    
  <img class="listing-photo" [src]="housingLocation?.photo"  alt="Exterior photo of {{housingLocation?.name}}"/>
  <h4 class="listing">{{housingLocation?.price}}</h4>
   
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
      
    <form [formGroup]="applyForm" >

      <label for="Check-in">Check in</label> <input id="Check-in" type="date" formControlName="checkIn">
      <label for="Check-out">Check out</label> <input id="Check-out" type="date" formControlName="checkOut">
      <label for="Guests">Guests</label> <input id="Guests" type="number" formControlName="Guests">
     <button type="submit" class="primary" (click)="submitApplication()">Reserve Now</button>
      </form>
     
    </section>

    <footer>
  <br><br><br><br><br>
</footer>

    </article>

`,
  styleUrls: ['./details.component.css']
})

  export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  totalCost: number | undefined;
  nights :number=0;
  param : any;

  constructor(private router: Router) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.param = this.route.snapshot.queryParams['location'];
    this.housingLocation = JSON.parse(this.param);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
  
  //initializing the form
  applyForm = new FormGroup({
    checkIn: new FormControl(''),
    checkOut: new FormControl(''),
    Guests: new FormControl('')
  });

  
  submitApplication() {

    this.totalCost = this.housingService.calculateTotalCost(this.applyForm, this.housingLocation?.id || -1);
    this.housingService.submitApplication(this.applyForm);
     console.log(this.applyForm);
   
    // Navigate to the checkout component with totalCost as a query parameter
    this.router.navigate(['/checkout'], { queryParams: { totalCost: this.totalCost, housingLocation : this.encodeLocation(this.housingLocation)  } });
  }
  encodeLocation(location: any): string {
    // Convert the object to a string using JSON.stringify
    return JSON.stringify(location);
  }

}

    



