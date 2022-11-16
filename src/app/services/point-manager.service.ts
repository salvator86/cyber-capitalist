import { Injectable } from '@angular/core';
import {BehaviorSubject, observable, Observable, Subject} from "rxjs";

export interface IBusiness {
  startPrice: number,
  time: number,
  cost: number,
  increase: number,
  available: number,
  sold: boolean,
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class PointManagerService {

  current: Subject<number>;
  businesses: IBusiness[];
  newUser: boolean;

  constructor() { }

  increaseCurrent(increase: number): void {
    this.current.next(increase)
  }

  initializeBusiness() {
    if (window.localStorage.getItem('newUser')) {
      this.newUser = false;
    } else {
      this.newUser = true;
    }
    if (window.localStorage.getItem('business')) {
      const dataBusiness: any = window.localStorage.getItem('business');
      this.businesses = JSON.parse(dataBusiness);
    } else {
      window.localStorage.setItem('business', JSON.stringify(require('../business.json')));
      this.businesses = require('../business.json');
    }
    if (window.localStorage.getItem('current')) {
      const dataCurrent: any = window.localStorage.getItem('current');
      this.current = new BehaviorSubject<number>(+JSON.parse(dataCurrent));
    } else {
      window.localStorage.setItem('current', JSON.stringify(0));
      this.current = new BehaviorSubject<number>(0);
    }
  }

}
