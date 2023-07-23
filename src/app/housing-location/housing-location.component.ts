import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location" > <i class="fa-solid fa-location-dot"></i>{{ housingLocation.city}}, {{housingLocation.state }} </p>
    <a [routerLink]="['/details', housingLocation.id]" [queryParams]="{ location: encodeLocation(housingLocation) }"> <i class="fa-solid fa-magnifying-glass">

    </i>Learn More</a> 
  </section>
`,

  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;


  encodeLocation(location: any): string {
    // Convert the object to a string using JSON.stringify
    return JSON.stringify(location);
  }
}

