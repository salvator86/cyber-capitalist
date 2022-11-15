import { Component } from '@angular/core';
import {PointManagerService} from "./services/point-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cyber-capitalist';
  el: any = document.querySelector('.main');
  pos: any = { top: 0, left: 0, x: 0, y: 0 };

  constructor(private pointManagerService: PointManagerService) {
  }

  ngOnInit() {
    this.pointManagerService.initializeBusiness();
  }

  mouseDown = false;

  startY: any;

  scrollTop: any;

  slider = document.querySelector<HTMLElement>('.parent');

  startDragging(e: any, flag: any, el: any) {
    this.mouseDown = true;
    this.startY = e.pageY - el.offsetTop;
    this.scrollTop = el.scrollTop;
  }
  stopDragging(e: any, flag: any) {
    this.mouseDown = false;
  }
  moveEvent(e: any, el: any) {
    e.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    console.log(e);
    const y = e.pageY - el.offsetTop;
    const scroll = y - this.startY;
    el.scrollTop = this.scrollTop - scroll;
  }

}
