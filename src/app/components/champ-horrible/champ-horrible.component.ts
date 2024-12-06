import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChaosInputComponent } from "../chaos-input/chaos-input.component";

@Component({
  selector: 'app-champ-horrible',
  imports: [FormsModule, CommonModule, ChaosInputComponent],
  templateUrl: './champ-horrible.component.html',
  styleUrls: ['./champ-horrible.component.css']
})
export class ChampHorribleComponent {
  numberValue: number | null = null;  // Valeur saisie par l'utilisateur
  asciiCharacters: string = '';  // Contient la chaîne des caractères ASCII ajoutés
  nbTry: number = 0; //contient le nombre de tentatives de l'utilisateur

  // Méthode pour bloquer toute saisie
  onKeyDown(event: KeyboardEvent): void {
    // Bloque la saisie de tout caractère
    event.preventDefault();
  }

  // Méthode pour ajouter le caractère ASCII au texte
  addCharacter(): void {
    if (this.numberValue !== null && !isNaN(this.numberValue) && this.numberValue >= 0 && this.numberValue <= 255) {
      this.asciiCharacters += String.fromCharCode(this.numberValue);  // Ajoute le caractère ASCII
      this.numberValue = null;  // Réinitialise le champ de saisie
    }
  }

  //permet de générer un nombre aléatoire entre min et max inclus
  getRandomIntInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Méthode pour vérifier que la saisie est un nombre valide
  onInputChange(event: Event): void {
    const input = <HTMLInputElement>event.target;
    const value = Number(input.value);

    if (value < 0) {
      // Si la valeur est négative, on génère un nombre aléatoire entre 33 et 255
      this.numberValue = this.getRandomIntInRange(33, 255);
    } else if (value > 255 || isNaN(value)) {
      // Si la valeur est invalide ou supérieure à 255, réinitialise l'input
      this.numberValue = null;
    }
  }

  // Méthode pour réinitialiser le champ et le texte affiché
  resetField(): void {
    this.numberValue = null;
    this.asciiCharacters = "";
  }

  Try(): void{
    const value = Number(this.numberValue);
    if (value>=0 && value<33){
      this.nbTry++;
    }
  }
}
