import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.scss']
})
export class UpgradesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnToStartScreen() {
    this.router.navigate(['game']);
  }

}
