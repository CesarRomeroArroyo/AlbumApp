import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UiService } from 'src/app/services/ui.service';
import { Chrome } from 'src/app/models/chromeModel';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-chromes',
  templateUrl: './chromes.component.html',
  styleUrls: ['./chromes.component.scss']
})
export class ChromesComponent implements OnInit, AfterContentInit {
  album: string;
  title: string;
  chromes:any[];
  next: boolean;
  page = 1;
  showLoader = false;
  constructor(
    private dataService: DataService, 
    private local: LocalstorageService, 
    private uiService: UiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.album = params.get("id")
    })
      var userKey = JSON.parse(this.local.obtener('USER__KEY'));
      this.dataService.album({userId: userKey.id, idAlbum: this.album, page:this.page}).subscribe((data: any) => {
      this.chromes = data.data.chromos;
          setTimeout(() => {
            this.drawCavas(data.data.chromos);
          }, 1000);
          this.next = data.data.next;
        
    });
  }

  ngAfterContentInit() {
    /*var userKey = JSON.parse(this.local.obtener('USER__KEY'));
        this.dataService.album({userId: userKey.id, idAlbum: this.album, code: userKey.code}).subscribe((data:any) => {
          this.drawCavas(data.data.chromos);
        });*/
  }

  drawCavas(chromos) {
    for( let chrom of chromos) {
      this.uiService.canvasstack(chrom.guid, chrom.img);
    }
  }
 
  showChromeModal(chrome: Chrome){
    chrome.show = true;
    chrome.shopping = false;
    this.uiService.showChromeModal(chrome);
  }

  onScroll() {
    
    if(this.next){
      this.showLoader = true;
      this.page++;
      var userKey = JSON.parse(this.local.obtener('USER__KEY'));
      this.dataService.album({userId: userKey.id, idAlbum: this.album, page:this.page})
      .subscribe((data: any) => {
        data.data.album.chromos.splice(0, 1);
        this.chromes = this.chromes.concat(data.data.album.chromos);
        this.next = data.data.next;
        setTimeout(() => {
          this.drawCavas(data.data.album.chromos);
          this.showLoader = false;
        }, 1000);
      })
    }
    
    
    
  }
}
