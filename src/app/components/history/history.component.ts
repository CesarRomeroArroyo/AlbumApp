import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UiService } from 'src/app/services/ui.service';
import { Chrome } from 'src/app/models/chromeModel';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterContentInit {
  chromes:any[];
  next: boolean;
  page = 1;
  showLoader = false;
  constructor(private dataService: DataService, private local: LocalstorageService, private uiService: UiService) { }

  ngOnInit() {
    var userKey = JSON.parse(this.local.obtener('USER__KEY'));
    this.dataService.historial({userId: userKey.id, page:this.page}).subscribe((data: any) => {
      this.chromes = data.data.chromos;
      setTimeout(() => {
        this.drawCavas(data.data.chromos);
      }, 1000);
      this.next = data.data.next;
    });
  }

  ngAfterContentInit() {
    /*var userKey = JSON.parse(this.local.obtener('USER__KEY'));
        this.dataService.historial({userId: userKey.id, page:this.page}).subscribe((data:any) => {
          setTimeout(() => {
            this.drawCavas(data.data.chromos);
          }, 1000);
        });*/
  }

  drawCavas(chromos) {
    for( let chrom of chromos) {
      console.log('canvas'+chrom.guid);
      console.log(chrom.guid);
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
      this.dataService.historial({userId: userKey.id, page:this.page})
      .subscribe((data: any) => {
        data.data.chromos.splice(0, 1);
        this.chromes = this.chromes.concat(data.data.chromos);
        this.next = data.data.next;
        setTimeout(() => {
          this.drawCavas(data.data.chromos);
          this.showLoader = false;
        }, 1000);
      })
    }
    
    console.log('scrolled!!');
    
  }
}
