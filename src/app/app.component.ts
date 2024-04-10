import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  template: `
  <main>
   <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.jpg" alt="logo" aria-hidden="true">
    <strong>Homes</strong>
   </header>
   <section class="content">
    <router-outlet></router-outlet>
   </section>
  </main>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
