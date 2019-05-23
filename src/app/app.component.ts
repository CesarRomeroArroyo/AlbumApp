import { Component } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  keyAlbum = false;
  constructor(private local: LocalstorageService) {
    if(this.local.obtener('ALBUM__KEY')) {
      this.keyAlbum = true;
    } else {
      this.keyAlbum = false;
    }
  }
}
