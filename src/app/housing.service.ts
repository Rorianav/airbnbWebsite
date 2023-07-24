import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
  
})


export class HousingService { 
  
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  //function to save check in and checkout values
  submitApplication(form:FormGroup) {
    console.log(`Homes reservation received: Check-In: ${form.value.checkIn}, Check-Out: ${form.value.checkOut}, Guests: ${form.value.Guests}.`);
  }
  
  //function to save personal values
  submitInfo(form:FormGroup) {
    console.log(`Personal information received: Name: ${form.value.name}, Email: ${form.value.email}, Address: ${form.value.address}, 
      CardNumber : ${form.value.cardNumber}, ExpiryDate: ${form.value.expiryDate}, CVV: ${form.value.cvv}, )
    `);
  }


   //getting the number of nights 
   calculateNumberOfNights(checkInDate: Date, checkOutDate: Date): number {
    console.log(checkInDate)
    console.log(checkOutDate)
      const timeDifference = new Date (checkOutDate).getTime() - new Date (checkInDate).getTime();
      const millisecondsInOneDay = 1000 * 60 * 60 * 24;
      const numberOfNights = Math.ceil(timeDifference / millisecondsInOneDay);
      return numberOfNights;
    }

  //calculating the houses cost
  calculateTotalCost(form: FormGroup, housingLocationId: number): number {
    const housingLocation = this.getHousingLocationById(housingLocationId);
    if (!housingLocation) {
      // Return 0 or handle the error if the housing location is not found
      return 0;
    }
    var priceString : number = housingLocation.value;
    var numberOfNights : number = this.calculateNumberOfNights(form.value.checkIn,form.value.checkOut)
    
   //printing values in the console 
    console.log(priceString)
    console.log(numberOfNights)

    if (!isNaN(priceString) || !isNaN(numberOfNights)) {
      const totalCost = priceString * numberOfNights;
      return totalCost;
    }

    else {
       // Handle invalid input, return 0, or display an error message
       return 0;
    }

  }
 
  
  //Home features
  housingLocationList: HousingLocation[] = [
   
    {
      id: 1,
      name: 'Gorgeous Lake Front Home',
      city: 'Branchville',
      state: 'NJ',
      price: '$180/night',
      value: 180,
      description: 'Welcome to The Good Place - our newly renovated lakefront home with  spectacular panoramic water views from the moment you walk in!',
      photo: '/assets/photo2.webp',
      availableUnits: 3,
      wifi: true,
      laundry: true,
      kitchen: true,
      tv: true,
      patio: true,
      parking: true,
      pets: true,
    },
    {
      id: 2,
      name: 'Luxe Rumson NJ Estate',
      city: 'Rumson',
      description: 'Welcome to Rumson, NJ! Gorgeous, modern waterfront property on the Shore. Minutes to beaches, Red Bank, theater, music venues and an hour to NYC driving or by ferry.',
      state: 'NY',
      price: '150/night',
      value: 150,
      photo: '/assets/luxe.webp',
      availableUnits: 1,
      wifi: true,
      laundry: false,
      kitchen: true,
      tv: true,
      patio: true,
      parking: true,
      pets: true,
    },
    {
      id: 3,
      name: 'The Pyramid House',
      city: 'Fire Island Pire',
      state: 'NY',
      price: '$150/night',
      value: 150,
      description: 'Architectural masterpiece with spectacular views and privacy. A soaring ceiling and a wall of glass overlooking the dunes, the ocean and the bay',
      photo: '/assets/photo3.webp',
      availableUnits: 1,
      wifi: true,
      laundry: true,
      kitchen: true,
      tv: true,
      patio: false,
      parking: true,
      pets: false,
    },
    {
      id: 4,
      name: 'Bridgehampton Guesthouse',
      city: 'Bridgehampton',
      state: 'NY',
      price: '$120/night',
      value: 120,
      description: 'This is a relaxing and quiet guesthouse located at the rear corner of the property. It is the perfect place to disconect and take a good rest time',
      photo: '/assets/photo2.jpeg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
      kitchen: true,
      tv: true,
      patio: true,
      parking: true,
      pets: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Centerport',
      state: 'NY',
      price: '$110/night',
      value: 110,
      description: 'Welcome to the beach and Long Islands Gold Coast! Enjoy stunning beachfront views from inside the charming and lovingly decorated home sorrounded by nature.',
      photo: '/assets/photo5.webp',
      availableUnits: 2,
      wifi: true,
      laundry: true,
      kitchen: true,
      tv: true,
      patio: true,
      parking: true,
      pets: false,
    },
    {
      id: 6,
      name: 'Hampton Bays House',
      city: 'Hampton Bays',
      price: '$190/night',
      value: 190,
      description :'Discover an oasis of tranquility in Hampton Bays. This secluded, mid-century modern home blends style and comfort, ideal for any escape. Boasting a private pool and close proximity to beautiful beaches',
      state: 'NY',
      photo: '/assets/photo6.webp',
      availableUnits: 4,
      wifi: true,
      laundry: true,
      kitchen: true,
      tv: true,
      patio: true,
      parking: true,
      pets: false,
    },
    
    {
      id: 7,
      name: 'Luxury Atlantic Property',
      city: 'Atlantic City',
      state: 'NJ',
      price: '$210/night',
      value: 210,
      description: 'Luxury place where you can spend time at the inside/outside pools, enjoying sunsets and beachside drinks. Plus you will be just steps from Atlantic City Boardwalk',
      photo: '/assets/photo8.webp',
      availableUnits: 6,
      wifi: false,
      laundry: false,
      kitchen: true,
      tv: true,
      patio: true,
      parking: true,
      pets: false,
    },
    {
      id: 8,
      name: 'Perfect Montauk Home',
      city: 'Montauk',
      state: 'NY',
      price: '$200/night',
      value: 200,
      description: 'The Newly renovated home gives you a peaceful and serene feeling everyday and there is close acces to ocean beaches and several parks',
      photo: '/assets/photo9.webp',
      availableUnits: 4,
      wifi: true,
      laundry: true,
      kitchen: true,
      tv: true,
      patio: true,
      parking: true,
      pets: true,


    }
    
  ];

 
}
