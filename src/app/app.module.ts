import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { B2bComponent } from './b2b/b2b.component';
import { B2cComponent } from './b2c/b2c.component';
import { ContactComponent } from './contact/contact.component';
import { CONST_ROUTING } from './app.route';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs';
import { TabComponent } from './tab';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    B2bComponent,
    B2cComponent,
    ContactComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
