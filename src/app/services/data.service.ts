import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private initialDataSubject = new BehaviorSubject({});
  private shopDataSubject = new BehaviorSubject({});
  shopItems = [];
  constructor(private http: HttpClient) {
    
  }

  phoneKeyGen(phone: any) {
    return this.http.post(environment.hostUrl+'/user/phone_keygen', phone);
  } 
  
  phoneValidation(validation: any) {
    return this.http.post(environment.hostUrl+'/user/phone_validation', validation);
  }

  historial(data: any) {
    return this.http.post(environment.hostUrl+'/user/history', data);
  }

  favorites(data: any) {
    return this.http.post(environment.hostUrl+'/user/favorites', data);
  }

  albums(data: any) {
    return this.http.post(environment.hostUrl+'/user/albums', data);
  }

  album(data: any) {
    return this.http.post(environment.hostUrl+'/user/album', data);
  }

  find(data: any) {
    return this.http.post(environment.hostUrl+'/chromo/find', data);
  }

  shop(data: any) {
    return this.http.post(environment.hostUrl+'/chromo/kart', data);
  }


  getUuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  initialdataSubscription(): Observable<any> {
    return this.initialDataSubject.asObservable();
  }

  initialData(data: any) {
    this.initialDataSubject.next(data);
  }

  shopDataSubscription(): Observable<any> {
    return this.shopDataSubject.asObservable();
  }

  shopData(data: any) {
    this.shopItems.push(data)
    this.shopDataSubject.next(this.shopItems);
  }

  cleanShopData() {
    this.shopItems = [];
    this.shopDataSubject.next(this.shopItems);
  }

}
