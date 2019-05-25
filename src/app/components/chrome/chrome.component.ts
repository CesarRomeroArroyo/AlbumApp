import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Chrome } from 'src/app/models/chromeModel';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.scss']
})
export class ChromeComponent implements OnInit, OnChanges {
  
  chrome: Chrome;
  quantity: number = 1;
  constructor(private uiService: UiService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.uiService.showChromeModalSubscription().subscribe((data: Chrome) => {
      this.chrome = data;
      this.chrome.htmlSafe =this.sanitizer.bypassSecurityTrustHtml(this.chrome.html); 
      setTimeout(() => {
        this.drawCavas(this.chrome);
      }, 1000);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }

  drawCavas(chromo) {
      this.uiService.canvasstack(chromo.id+'modal'+chromo.b10, chromo.img);
  }

  hideModal() {
    this.chrome.show = false;
    this.uiService.showChromeModal(this.chrome);
  }

  addQuantity(){
    this.quantity++;
  }

  removeQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

}
