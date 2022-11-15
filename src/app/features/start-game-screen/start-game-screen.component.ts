import { Component, OnInit } from '@angular/core';
import {IBusiness, PointManagerService} from "../../services/point-manager.service";

@Component({
  selector: 'app-start-game-screen',
  templateUrl: './start-game-screen.component.html',
  styleUrls: ['./start-game-screen.component.scss']
})
export class StartGameScreenComponent implements OnInit {

  currentPoint: number;
  businesses: IBusiness[];

  constructor(private pointManager: PointManagerService) { }

  ngOnInit(): void {
    this.pointManager.current.subscribe(curr => {
      this.currentPoint = curr
    })
    this.businesses = this.pointManager.businesses;
  }

  // mouseDown = false;
  //
  // startY: any;
  //
  // scrollTop: any;
  //
  // slider = document.querySelector<HTMLElement>('.start-game-businesses');

  // startDragging(e: any, flag: any, el: any) {
  //   this.mouseDown = true;
  //   this.startY = e.pageY - el.offsetTop;
  //   this.scrollTop = el.scrollTop;
  // }
  // stopDragging(e: any, flag: any) {
  //   this.mouseDown = false;
  // }
  // moveEvent(e: any, el: any) {
  //   e.preventDefault();
  //   if (!this.mouseDown) {
  //     return;
  //   }
  //   const y = e.pageY - el.offsetTop;
  //   const scroll = y - this.startY;
  //   el.scrollTop = this.scrollTop - scroll;
  // }

}
