import {Component, Input, OnInit} from '@angular/core';
import {IBusiness, PointManagerService} from "../../services/point-manager.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  @Input() business: IBusiness;
  currentSum: number;
  time: number;
  active: boolean = false;
  styleActive: string = '';
  availableBlock: string = '';
  count: number;
  disabledButtonBuy: boolean = true;
  disabledIncrease: boolean = true;
  flashEarn: string;
  enableButtonBuy: string;
  newUser: boolean;
  darkBusiness: string = ''

  constructor(private pointManagerService: PointManagerService) { }

  ngOnInit(): void {
    this.pointManagerService.current.subscribe(value => {
      this.time = this.business.time;
      this.currentSum = value;
      if (value >= this.business.available) {
        this.disabledButtonBuy = false;
        this.enableButtonBuy = '';
      } else {
        this.disabledButtonBuy = true;
        this.enableButtonBuy = 'enable-button-buy';
      }
      this.disabledButtonBuy = value < this.business.available;
      this.disabledIncrease = value < this.business.cost;
      if (this.business.sold && !this.active) {
        this.flashEarn = 'flash-earn';
      }
    });
    if (this.pointManagerService.newUser) {
      this.newUser = this.pointManagerService.newUser;
      // this.darkBusiness = 'dark-business';
    }
  }

  buyBusiness() {
    if (!this.business.sold && this.currentSum >= this.business.available) {
      this.pointManagerService.current.next(this.currentSum - this.business.available)
      this.business.sold = true;
      this.flashEarn = 'flash-earn';
      window.localStorage.setItem('current', JSON.stringify(this.currentSum));
      window.localStorage.setItem('business', JSON.stringify(this.pointManagerService.businesses));
    }
  }

  earn(loading: HTMLDivElement) {
    this.flashEarn = '';
    this.count = this.time;
    let tik: number;
    if (this.time !== 0) {
      tik = 100 / (this.time/1000) / 40;
    } else {
      tik = 100;
    }
    if (this.business.sold) {
      this.active = true;
      this.styleActive = 'business-earn-active'
      const intervalDuration = setInterval(() => {
        this.count = this.count - 25;
        loading.style.width = (+loading.style.width.slice(0, -1) + +tik).toString() + '%';
      }, 25)
      setTimeout(async () => {
        await clearInterval(intervalDuration)
        this.active = false;
        this.styleActive = '';
        this.time = this.business.time;
        loading.style.width = '';
        this.flashEarn = 'flash-earn';
        this.pointManagerService.increaseCurrent(this.currentSum + this.business.startPrice);
        window.localStorage.setItem('current', JSON.stringify(this.currentSum));
      }, this.business.time)
    }
    window.localStorage.setItem('business', JSON.stringify(this.pointManagerService.businesses));
  }

  increaseBusinessEarn(): void {
    if (this.business.sold && this.business.cost <= this.currentSum) {
      this.pointManagerService.increaseCurrent(this.currentSum - this.business.cost)
      this.business.cost = this.business.cost + (this.business.cost * 0.3);
      this.pointManagerService.businesses.map(business => {
        if (business.time === this.business.time) {
          business.startPrice = business.startPrice + business.increase;
          if (this.business.cost > this.currentSum) {
            this.disabledIncrease = true;
          }
        }
      })
    }
    window.localStorage.setItem('current', JSON.stringify(this.currentSum));
    window.localStorage.setItem('business', JSON.stringify(this.pointManagerService.businesses));
  }

}
