import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  template: `
  
  <div class="container">
    <h3>Personal Information</h3>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" required>

      <label for="address">Address:</label>
      <textarea id="address" required></textarea>

      <label for="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" required>

      <label for="expiryDate">Expiry Date:</label>
      <input type="text" id="expiryDate" required>

      <label for="cvv">CVV:</label>
      <input type="text" id="cvv" required>

      <button type="submit" (click)="checkout()">Place Order</button>
    </form>
  </div>

  <div class="cart">
      <h2>Shopping Cart</h2>
      <img class="photo" [src]="this.housingLocation?.photo" >
      <p>Name: {{this.housingLocation?.name}}</p>
      <p>City: {{this.housingLocation?.city}}</p>
      <p>Total Cost: {{ totalCost | currency }}</p>

    </div>

  `,
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  
  totalCost: number | undefined;
  housingLocation: HousingLocation | undefined;
  housingService = inject(HousingService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the total cost from the query parameters
    this.route.queryParams.subscribe(params => {
      this.totalCost = Number(params['totalCost']);
      const locationParam = this.route.snapshot.queryParams['housingLocation'];
      this.housingLocation = JSON.parse(locationParam);
      console.log(this.housingLocation);
    });
  }

  checkout(){

  }
}

