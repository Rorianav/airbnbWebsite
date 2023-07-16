import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

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

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
  
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Cottage with Pond Views',
      city: 'Stroudsburg',
      state: 'Pennsylvania',
      description: 'The Waters Edge cottage is a vacation rental located in Pennsylvanias mountains. It boasts 1 bedroom, 1.5 baths, and a covered porch that offers beautiful waterfront views.This rental provides an opportunity to escape from your daily routine and enjoy a relaxing stay.',
      photo: '/assets/photo.jpeg',
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
      id: 1,
      name: 'Gorgeous Lake Front Home',
      city: 'Branchville',
      state: 'NJ',
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
      name: 'Luxe Rumson NJ Waterfront Estate',
      city: 'Rumson',
      description: 'Welcome to Rumson, NJ! Gorgeous, modern waterfront property on the Shore. Minutes to beaches, Red Bank, theater, music venues and an hour to NYC driving or by ferry.',
      state: 'NY',
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
      name: 'The Legendary Pyramid House',
      city: 'Fire Island Pire',
      state: 'NY',
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
      description: 'Welcome to the beach and Long Islands Gold Coast! Enjoy stunning beachfront views from the deck and from inside the charming and lovingly decorated home sorrounded by nature.',
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
      description :'Discover an oasis of tranquility in Hampton Bays. This secluded, mid-century modern home blends style and comfort, ideal for any escape. Boasting a private pool and close proximity to beautiful beaches, the property is also just a short drive from the vibrant town of Southampton.',
      state: 'NY',
      photo: '/assets/photo6.webp',
      availableUnits: 5,
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
      description: 'Luxury place where you can spend time at the inside/outside pools, enjoying sunsets and beachside drinks. Plus you will be just steps from Atlantic City Boardwalk',
      photo: '/assets/photo8.webp',
      availableUnits: 10,
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
