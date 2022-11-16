import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menu: boolean = false;
  rotateMenuButton: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openShop() {
    this.router.navigate(['/shop'])
  }

  openMenu() {
    this.menu = !this.menu;
    if (this.rotateMenuButton) {
      this.rotateMenuButton = '';
    } else {
      this.rotateMenuButton = 'rotate-menu-button';
    }
  }

  openManagers() {
    this.router.navigate(['managers']);
  }

  openUpgrades() {
    this.router.navigate(['upgrades']);
  }

  openInventory() {
    this.router.navigate(['inventory']);
  }

  openLeadersBoards() {
    this.router.navigate(['leaders-board']);
  }

}
