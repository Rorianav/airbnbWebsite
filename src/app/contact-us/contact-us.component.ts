import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  template: `
   <body>
    <section class="head" >

    <div class="top">
        <h1>Contact Us</h1>
        <p>How can we help?</p>
    </div>

<section class="bar">
<div class="uno">
<i class="fa-solid fa-envelope" style="color: #00364a;"></i>
    <h3>Email Us</h3>
    <p>Houserental@services.com</p>
    </div>

<div class="dos">
<i class="fa-solid fa-phone" style="color: #00364a;"></i>
    <h3>Call Us</h3>
    <p>888-564-0987</p>
    </div>
    
<div class="tres">
<i class="fa-solid fa-location-dot" style="color: #00364a;"></i>
    <h3>Come See Us</h3>
    <p></p>
</div>


  `,
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

}
