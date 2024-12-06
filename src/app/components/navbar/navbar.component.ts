import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoDeZinzinComponent } from "../logo-de-zinzin/logo-de-zinzin.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [LogoDeZinzinComponent]
})
export class NavbarComponent {
  
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  navigateToChaos(): void {
    this.router.navigate(['/chaos']);
  }
}
