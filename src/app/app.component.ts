import { Component, OnInit, OnChanges } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';
import { UiService } from './services/ui.service';
import { Chrome } from './models/chromeModel';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  
  
  keyAlbum = false;
  chromeToShow: Chrome;
  crhomes: any;
  userKey: any;
  numChromos: any;
  constructor(private local: LocalstorageService, private uiService: UiService, private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.userKey = JSON.parse(this.local.obtener('USER__KEY'));
    this.dataService.initialLocalUserDataSubcription().subscribe((userData) => {
      if(userData.id)
        this.userKey = userData;
    });
    this.uiService.showChromeModalSubscription().subscribe((data: Chrome) => {
      this.chromeToShow = data;
    });

    this.dataService.initialdataSubscription().subscribe((data: any) =>{
      this.keyAlbum = data.show;
    });

    this.dataService.shopDataSubscription().subscribe((data)=>{
      this.crhomes = data;
      this.numChromos = data.length;
    });

    if(this.local.obtener('USER__KEY')) {
      this.keyAlbum = true;
    } else {
      this.keyAlbum = false;
    }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.dataService.shopDataSubscription().subscribe((data)=>{
      this.crhomes = data;
      debugger;
      this.numChromos = data.length;
      this.crhomes.forEach((data) => {
      var precio = data.dw.split(' ')[0];
      });
    });
  }
}
