import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  crhomes = [];
  total= 0;
  constructor(private dataService: DataService, private local: LocalstorageService) { 
    this.dataService.shopDataSubscription().subscribe((data)=>{
      this.crhomes = data;
      this.total= 0;
      this.crhomes.forEach((data) => {
        var precio = data.dw.split(' ')[0];
        this.total += parseInt(precio);
      });
 
      console.log(this.total);
    });
  }

  ngOnInit() {
  }

  shop(){
    var userKey = JSON.parse(this.local.obtener('USER__KEY'));
    this.dataService.shop({userId: userKey.id, chromos: this.crhomes}).subscribe((data) => {
      this.dataService.cleanShopData();
    });
  }

}
