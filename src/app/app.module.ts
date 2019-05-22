import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './components/initial/initial.component';
import { BuyChromesComponent } from './components/buy-chromes/buy-chromes.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    BuyChromesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
