import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Popup {
  top: string;
  left: string;
  id: string;
  zoomEffect: boolean;
}

@Component({
  selector: 'app-chaos-input',
  imports: [CommonModule],
  templateUrl: './chaos-input.component.html',
  styleUrls: ['./chaos-input.component.css']
})
export class ChaosInputComponent {
  // Liste des pop-ups, chaque pop-up a une position et un état de visibilité
  popups: Popup[] = [];

  // Ouvrir une nouvelle pop-up
  openPopup(): void {
    const newPopup = this.createPopup();  // Créer une nouvelle pop-up
    this.popups.push(newPopup);  // Ajouter la pop-up à la liste
  }

  // Fermer une pop-up (et la retirer de la liste) ou déplacer la pop-up
  closePopup(index: number, result: boolean): void {
    if (!result) {
      this.popups[index].zoomEffect = true;  // Appliquer l'effet de zoom
      setTimeout(() => {
        this.popups[index].zoomEffect = false;  // Réinitialiser l'effet de zoom après l'animation
      }, 500);  // Durée de l'animation
    } else {
      console.log('Résultat :', result ? 'Oui' : 'Non');
      const newPopup = this.createPopup();  // Créer une nouvelle pop-up
      this.popups.push(newPopup);  // Ajouter la nouvelle pop-up à la liste
    }
  }

  // Créer une nouvelle pop-up avec une position aléatoire
  createPopup(): Popup {
    const randomTop = Math.floor(Math.random() * 80) + 10;  // Position aléatoire entre 10% et 90% de l'écran
    const randomLeft = Math.floor(Math.random() * 80) + 10; // Position aléatoire entre 10% et 90% de l'écran

    return {
      top: `${randomTop}%`,  // Conversion des positions en pourcentages pour le CSS
      left: `${randomLeft}%`,
      id: Math.random().toString(36).substr(2, 9),  // Un identifiant unique pour chaque pop-up
      zoomEffect: false  // Initialiser l'effet de zoom à false
    };
  }
}
