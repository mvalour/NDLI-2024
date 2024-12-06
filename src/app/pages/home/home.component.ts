import { Component } from '@angular/core';
import { ChampHorribleComponent } from '../../components/champ-horrible/champ-horrible.component';

@Component({
  selector: 'app-home',
  imports: [ChampHorribleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
