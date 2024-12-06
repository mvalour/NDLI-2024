
import { Component } from "@angular/core";
import { ChaosInputComponent } from "../../components/chaos-input/chaos-input.component";
import { LogoDeZinzinComponent } from '../../components/logo-de-zinzin/logo-de-zinzin.component';

@Component({
  selector: 'app-chaos',
  imports: [ChaosInputComponent, LogoDeZinzinComponent],
  templateUrl: './chaos.component.html',
  styleUrl: './chaos.component.css'
})
export class ChaosComponent {

}
