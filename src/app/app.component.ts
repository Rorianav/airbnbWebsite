import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
   <main>
  
      <header class="brand-name"> 
      <img class="brand-logo" src="/assets/fd.svg" alt="logo" aria-hidden="true" class="mylogo">
      </header>
   
    <section class="content">
      <router-outlet></router-outlet>
    </section>

    <div id="contact" class="Contact"> 
    <a [routerLink]="['/contact']">
      <i class="fa-solid fa-phone" style="color: #00364a;"></i>Contact Us! </a></div>

  <div class="Offers"> 
    <a [routerLink]="['/']"> 
    <i class="fa-solid fa-house" style="color: #00364a;"></i>Homepage </a></div>

`,

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
