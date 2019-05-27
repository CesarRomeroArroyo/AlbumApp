import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { DataService } from 'src/app/services/data.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  number1='';
  number2='';
  number3='';
  number4='';
  phone: string;
  constructor(private local: LocalstorageService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.phone = JSON.parse(this.local.obtener('USER__KEY')).phone;
  }

  addNumber(number) {
    if(number==='BCK'){
      if(this.number4!=='') {
        this.number4 = '';
        return;
      }
      if(this.number3!=='') {
        this.number3 = '';
        return;
      }
      if(this.number2!=='') {
        this.number2 = '';
        return;
      }
      if(this.number1!=='') {
        this.number1 = '';
        return;
      }
      
    } else {
      if(this.number1==='') {
        this.number1 = number;
        return;
      }
      if(this.number2===''){
        this.number2 = number;
        return;
      }
      if(this.number3===''){
        this.number3 = number;
        return;
      }
      if(this.number4===''){
        this.number4 = number;
        this.validateSMS();
        return;
      }
    }
  }

  validateSMS(){
    var code = this.number1+this.number2+this.number3+this.number4;
    this.dataService.phoneValidation({phone: this.phone, code}).subscribe((data:any) => {
      var userKey = JSON.parse(this.local.obtener('USER__KEY'));
      userKey['id']=data.id;
      userKey['balance']=data.balance;
      userKey['code']=code;
      this.local.agregar('USER__KEY', JSON.stringify(userKey));
      this.dataService.initialdataSubscription();
      data.data['show']=true;
      this.dataService.initialData(data.data);
    });
  }

}
