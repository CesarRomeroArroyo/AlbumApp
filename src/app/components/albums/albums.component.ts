import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UiService } from 'src/app/services/ui.service';
import { Chrome } from 'src/app/models/chromeModel';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums:any[];
  next: boolean;
  page = 1;
  showLoader = false;
  constructor(private dataService: DataService, private local: LocalstorageService, private uiService: UiService) { }

  ngOnInit() {
    var userKey = JSON.parse(this.local.obtener('USER__KEY'));
    this.dataService.albums({userId: userKey.id, page:this.page}).subscribe((data: any) => {
      this.albums = data.data.albums;
      this.next = data.data.next;
    });
  }


  onScroll() {
    if(this.next){
      this.showLoader = true;
      this.page++;
      var userKey = JSON.parse(this.local.obtener('USER__KEY'));
      this.dataService.albums({userId: userKey.id, page:this.page})
      .subscribe((data: any) => {
        data.data.albums.splice(0, 1);
        this.albums = this.albums.concat(data.data.albums);
        this.next = data.data.next;
        setTimeout(() => {
          this.showLoader = false;
        }, 1000);
      })
    }
    
    
    
  }

}
