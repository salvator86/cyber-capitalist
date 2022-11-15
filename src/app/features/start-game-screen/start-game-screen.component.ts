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

}
