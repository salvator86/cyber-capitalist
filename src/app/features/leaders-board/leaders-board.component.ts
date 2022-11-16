import { Component, OnInit } from '@angular/core';
import {PointManagerService} from "../../services/point-manager.service";

@Component({
  selector: 'app-leaders-board',
  templateUrl: './leaders-board.component.html',
  styleUrls: ['./leaders-board.component.scss']
})
export class LeadersBoardComponent implements OnInit {

  title: string = 'LEADERBOARD!';
  currentSum: number;

  constructor(private pointManagerService: PointManagerService) { }

  ngOnInit(): void {

    this.pointManagerService.current.subscribe(sum => {
      this.currentSum = sum;
    })

  }

}
