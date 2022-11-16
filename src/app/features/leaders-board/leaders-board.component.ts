import { Component, OnInit } from '@angular/core';
import {PointManagerService} from "../../services/point-manager.service";
import {ILeader, LeadersService} from "../../services/leaders.service";

@Component({
  selector: 'app-leaders-board',
  templateUrl: './leaders-board.component.html',
  styleUrls: ['./leaders-board.component.scss']
})
export class LeadersBoardComponent implements OnInit {

  title: string = 'LEADERBOARD!';
  currentSum: number;
  leaders: ILeader[];

  constructor(private pointManagerService: PointManagerService,
              private leadersService: LeadersService) { }

  ngOnInit(): void {

    this.pointManagerService.current.subscribe(sum => {
      this.currentSum = sum;
    })

    this.leaders = this.leadersService.leaders;

  }

}
