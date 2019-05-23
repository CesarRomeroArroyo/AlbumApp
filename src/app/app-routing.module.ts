import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HistoryComponent } from './components/history/history.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ShopchromeComponent } from './components/shopchrome/shopchrome.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ChromesComponent } from './components/chromes/chromes.component';

const routes: Routes = [  
  {
    path: 'initial',
    component: InitialComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }, 
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'shopping',
    component: ShoppingcartComponent
  },
  {
    path: 'shopchrome',
    component: ShopchromeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'chromes/:id',
    component: ChromesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
