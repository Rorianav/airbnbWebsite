import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component'; 
import { ContactUsComponent } from './contact-us/contact-us.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },

    { 
      path: 'checkout', 
      component: CheckoutComponent
     },

    {
      path: 'contact',
      component: ContactUsComponent
    },
  ];
  
  export default routeConfig;
