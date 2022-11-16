import { Component, OnInit } from '@angular/core';
import {PointManagerService} from "../../services/point-manager.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPoint: number;
  resetCountClick: number = 0;

  constructor(private pointManagerService: PointManagerService) { }

  ngOnInit(): void {
    this.pointManagerService.current.subscribe(curr => {
      this.currentPoint = curr
    })
  }

  reset() {
    this.resetCountClick++;
    if (this.resetCountClick === 7) {
      this.resetCountClick = 0;
      window.localStorage.setItem('business', JSON.stringify(require('../../business.json')));
      this.pointManagerService.businesses = require('../../business.json');
      window.localStorage.setItem('current', JSON.stringify(0));
      this.pointManagerService.current = new BehaviorSubject<number>(0);
      window.localStorage.removeItem('newUser');
      window.location.reload()
    }
  }
}
