import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnToStartScreen() {
    this.router.navigate(['game']);
  }

}
