import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  phoneNumber: string;
  constructor(private dataService: DataService, private uiService: UiService, private local: LocalstorageService) { }

  ngOnInit() {
  }

  sendPhoneNumber() {
    console.log(this.phoneNumber);
    this.dataService.phoneKeyGen(this.phoneNumber).subscribe((data: any) => {
      console.log(data);
      if(data.goto){
        data['phone']= this.phoneNumber;
        this.local.agregar('USER__KEY', JSON.stringify(data));
        this.uiService.showSms(true);
      }
    });
  }

}
