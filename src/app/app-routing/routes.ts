import { Routes } from '@angular/router';

import { MenuComponent } from  '../menu/menu.component';
import { DishComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'About',     component: AboutComponent },
  { path: 'dishdetail/:id', component:DishComponent }, 
  { path: 'contactus',     component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];