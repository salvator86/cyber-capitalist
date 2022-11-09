import { Injectable } from '@angular/core';
import {BehaviorSubject, observable, Observable, Subject} from "rxjs";

export interface IBusiness {
  startPrice: number,
  time: number,
  cost: number,
  increase: number,
  available: number,
  sold: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PointManagerService {

  current: Subject<number> = new BehaviorSubject<number>(0);

  businesses: IBusiness[] = [
    {startPrice: 2025.50, time: 100, cost: 1025.50, increase: 250.05, available: 0, sold: true},
    {startPrice: 5880.30, time: 1000, cost: 3025.80, increase: 1250.30, available: 50000, sold: false},
    {startPrice: 6480.20, time: 6000, cost: 6594.10, increase: 2250.50, available: 120000, sold: false},
    {startPrice: 9230.80, time: 18000, cost: 10800.70, increase: 3200.70, available: 350000, sold: false},
    {startPrice: 10560.40, time: 36000, cost: 15600.90, increase: 4100.20, available: 800000, sold: false},
    {startPrice: 2025.50, time: 0, cost: 1025.50, increase: 250.05, available: 0, sold: false},
    {startPrice: 5880.30, time: 1000, cost: 3025.80, increase: 1250.30, available: 50000, sold: false},
    {startPrice: 6480.20, time: 6000, cost: 6594.10, increase: 2250.50, available: 120000, sold: false},
    {startPrice: 9230.80, time: 18000, cost: 10800.70, increase: 3200.70, available: 350000, sold: false},
    {startPrice: 10560.40, time: 36000, cost: 15600.90, increase: 4100.20, available: 800000, sold: false}
  ]

  constructor() { }

  increaseCurrent(increase: number): void {
    this.current.next(increase)
  }

}
