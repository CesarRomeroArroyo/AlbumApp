import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chromes',
  templateUrl: './chromes.component.html',
  styleUrls: ['./chromes.component.scss']
})
export class ChromesComponent implements OnInit {
  numbers = [];
  showLoader = false;
  constructor() { }

  ngOnInit() {
    for (let index = 0; index <= 20; index++) {
      this.numbers.push(index);
    }
  }

  onScroll() {
    this.showLoader = true;
    setTimeout(() => {
      for (let index = 0; index <= 10; index++) {
      
        this.numbers.push(index);
      }
      this.showLoader = false;  
    }, 2000);
    
    console.log('scrolled!!');
    
  }

}
