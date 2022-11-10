import { Component, OnInit } from '@angular/core';
import {PointManagerService} from "../../services/point-manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPoint: number;

  constructor(private pointManager: PointManagerService) { }

  ngOnInit(): void {
    this.pointManager.current.subscribe(curr => {
      this.currentPoint = curr
    })
  }

}
