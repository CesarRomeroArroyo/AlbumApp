import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Chrome } from '../models/chromeModel';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  private chromeModalSubject = new BehaviorSubject(new Chrome);
  private smsSubject = new BehaviorSubject({});
  constructor() {
      
  }

  showChromeModalSubscription(): Observable<Chrome> {
    return this.chromeModalSubject.asObservable();
  }

  showSmsSubscription(): Observable<any> {
    return this.smsSubject.asObservable();
  }

  showChromeModal(chrome: Chrome) {
    this.chromeModalSubject.next(chrome);
  }

  showSms(chrome: boolean) {
    this.smsSubject.next(chrome);
  }

  canvasstack (canv, paths){ console.log(canv);
    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(canv);
    const canvas_width = canvas.width,
    canvas_height = canvas.height,
    cxt:CanvasRenderingContext2D = canvas.getContext("2d"),
    proms = [];
    var imgs = [];
    if (cxt)
    {
      for (let path of paths)
      {
          proms.push(new Promise((resolve, reject) => {
            let img = new Image();

            img.src = '../../../assets/'+path;

            imgs.push(img);

            const addHn = () => {
                img.removeEventListener("load", addHn);
                resolve(true);
                },
                remHn = () => {
                  img.removeEventListener("error", remHn);
                reject(new Error());
                };

            img.addEventListener("load", addHn);
            img.addEventListener("error", remHn);
          }));
      }

      Promise.all(proms).then(() => {
        for (let img of imgs)
        {
          cxt.drawImage(img, 0, 0, canvas_width, canvas_height); 
        }

        imgs = null;
      });
    }
  }


  
}
