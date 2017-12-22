import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { B2bComponent } from './b2b/b2b.component';
import { B2cComponent } from './b2c/b2c.component';




export const routes: Routes = [
    {path : '', component : HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'b2b', component: B2bComponent },
    { path: 'b2c', component: B2cComponent },
    { path: 'contact', component: ContactComponent }
  ];

  export const CONST_ROUTING = RouterModule.forRoot(routes);