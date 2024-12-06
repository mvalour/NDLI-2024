import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OceanCaptchaComponent } from '../../components/ocean-captcha/ocean-captcha.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, OceanCaptchaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showCaptcha: boolean = false; // Captcha désactivé au début

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showCaptcha = true;
    }, 5000);
  }
}
