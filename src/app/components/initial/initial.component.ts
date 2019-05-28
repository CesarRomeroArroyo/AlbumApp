import { Component, OnInit, Inject, AfterContentInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Chrome } from 'src/app/models/chromeModel';
import { DataService } from 'src/app/services/data.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { DOCUMENT } from '@angular/common'; 
@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit, AfterContentInit {
  chromes:any[];
  constructor(
              private uiService: UiService, 
              private dataService: DataService, 
              private local: LocalstorageService,
              @Inject(DOCUMENT) document
              ) { }

  ngOnInit() {
    this.dataService.initialdataSubscription().subscribe((data:any)=>{
      
      if(data.chromos){
        this.chromes = data.chromos;
      } else {
        var userKey = JSON.parse(this.local.obtener('USER__KEY'));
        this.dataService.phoneValidation({phone: userKey.phone, code: userKey.code}).subscribe((data:any) => {
          this.chromes = data.data.chromos;
            setTimeout(() => {
              this.drawCavas(data.data.chromos);
            }, 1000);
          console.log(this.chromes);
        });
      }
    });
  }

  ngAfterContentInit() {
    /*var userKey = JSON.parse(this.local.obtener('USER__KEY'));
        this.dataService.phoneValidation({phone: userKey.phone, code: userKey.code}).subscribe((data:any) => {
          
          for( let chrom of data.data.chromos) {
            this.uiService.canvasstack (chrom.guid, chrom.img)
          }
        });
    */
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

 

}
