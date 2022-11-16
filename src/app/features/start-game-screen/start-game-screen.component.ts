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
  newUser: boolean;
  firstBusiness: IBusiness;
  currentTutorialScreen: number = 1;

  constructor(private pointManager: PointManagerService) { }

  ngOnInit(): void {
    this.pointManager.current.subscribe(curr => {
      this.currentPoint = curr
    })
    this.businesses = this.pointManager.businesses;
    this.newUser = this.pointManager.newUser;
    this.firstBusiness = this.pointManager.businesses[0];
  }

  endTutorial() {
    this.newUser = false;
    this.pointManager.newUser = false;
    window.localStorage.setItem('newUser', 'false');
    this.currentTutorialScreen = 0;
  }

}
