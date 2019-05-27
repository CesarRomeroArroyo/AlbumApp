import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  showSms: boolean;
  constructor(private uiService: UiService) {
    this.showSms = false;
    this.uiService.showSmsSubscription().subscribe((data: any) => {
      debugger
      if(data=== true || data=== false)
        this.showSms = data;
      
    });
  }

  ngOnInit() {
  }

}
