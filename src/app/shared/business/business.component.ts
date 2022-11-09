import {Component, Input, OnInit} from '@angular/core';
import {IBusiness, PointManagerService} from "../../services/point-manager.service";
import {map, Subject} from "rxjs";

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

  constructor(private pointManagerService: PointManagerService) { }

  ngOnInit(): void {
    this.pointManagerService.current.subscribe(value => {
      this.time = this.business.time;
      this.currentSum = value;
    });
  }

  buyBusiness() {
    if (!this.business.sold && this.currentSum > this.business.available) {
      this.pointManagerService.current.next(this.currentSum - this.business.available)
      this.business.sold = true;
    }
  }

  earn() {
    this.count = this.time;
    if (this.business.sold) {
      this.active = true;
      this.styleActive = 'business-earn-active'
      const intervalDuration = setInterval(() => {
        this.count = this.count - 1000;
      }, 1000)
      setTimeout(async () => {
        await clearInterval(intervalDuration)
        this.active = false;
        this.styleActive = '';
        this.time = this.business.time;
        this.pointManagerService.increaseCurrent(this.currentSum + this.business.startPrice)
      }, this.business.time)
    }
  }

  increaseBusinessEarn(): void {
    if (this.business.sold && this.business.cost <= this.currentSum) {
      this.pointManagerService.increaseCurrent(this.currentSum - this.business.cost)
      this.pointManagerService.businesses.map(business => {
        if (business.time === this.business.time) {
          business.startPrice = business.startPrice + business.increase;
        }
      })
    }
  }

}
