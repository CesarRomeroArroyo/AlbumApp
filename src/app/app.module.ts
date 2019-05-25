import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './components/initial/initial.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PhoneComponent } from './components/phone/phone.component';
import { SmsComponent } from './components/sms/sms.component';
import { ValidationComponent } from './components/validation/validation.component';
import { HistoryComponent } from './components/history/history.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ShopchromeComponent } from './components/shopchrome/shopchrome.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ChromesComponent } from './components/chromes/chromes.component';
import { ChromeComponent } from './components/chrome/chrome.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    FavoritesComponent,
    PhoneComponent,
    SmsComponent,
    ValidationComponent,
    HistoryComponent,
    ShoppingcartComponent,
    ShopchromeComponent,
    MenuComponent,
    AlbumsComponent,
    ChromesComponent,
    ChromeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
