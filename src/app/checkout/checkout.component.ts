import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; // importing form control


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  
  <div class="flex-container">
  <div class="container">
    <h3>Personal Information</h3>

    <form [formGroup]="infoForm" > 

      <label for="name">Name:</label>
      <input type="text" id="name" formControlName="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email" required>

      <label for="address">Address:</label>
      <textarea id="address" formControlName="address" required></textarea>

      <label for="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" formControlName="cardNumber" placeholder="0000 0000 0000 0000"required>

      <label for="expiryDate">Expiry Date:</label>
      <input type="text" id="expiryDate"  formControlName="expiryDate" placeholder="mm/yy" required>

      <label for="cvv">CVV:</label>
      <input type="text" id="cvv" formControlName="cvv" required>

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

   //initializing the form adding the input id's
   infoForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    cardNumber: new FormControl(''),
    expiryDate: new FormControl(''),
    cvv: new FormControl('')
  });

  //windows confirmation
  checkout() {

    // values saved when client clicks on "reserve now" button 
    this.housingService.submitInfo(this.infoForm);
    console.log(); 

    const confirmationNumber = 'HH' + this.generateRandomNumber(100000, 999999);
    window.alert(`Your Booking is confirmed ${this.infoForm.value.name}. Your confirmation number is #${confirmationNumber}`);
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

