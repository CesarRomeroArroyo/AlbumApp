import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';
import { UiService } from './services/ui.service';
import { Chrome } from './models/chromeModel';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  keyAlbum = false;
  chromeToShow: Chrome;
  constructor(private local: LocalstorageService, private uiService: UiService, private dataService: DataService) {
     
    this.uiService.showChromeModalSubscription().subscribe((data: Chrome) => {
      this.chromeToShow = data;
    });

    this.dataService.initialdataSubscription().subscribe((data: any) =>{
      this.keyAlbum = data.show;
    });
  }

  ngOnInit(): void {
    if(this.local.obtener('USER__KEY')) {
      this.keyAlbum = true;
    } else {
      this.keyAlbum = false;
    }
  }
}
