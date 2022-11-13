import { Component } from '@angular/core';
import {PointManagerService} from "./services/point-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cyber-capitalist';

  constructor(private pointManagerService: PointManagerService) {
  }

  ngOnInit() {
    this.pointManagerService.initializeBusiness();
  }
}
