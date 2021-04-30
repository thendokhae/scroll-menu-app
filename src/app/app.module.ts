import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { LargeCardComponent } from './shared/large-card/large-card.component';
import { ButtonComponent } from './shared/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonLinkComponent } from './shared/button-link/button-link.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LargeCardComponent,
    ButtonComponent,
    HomeComponent,
    NavBarComponent,
    ButtonLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
