import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Popup {
  top: string;
  left: string;
  id: string;
  megaZoom: boolean;
  randomMovement: boolean;
  rotation: boolean;
  colorChange: boolean;
  rotateEffect: boolean;
}

@Component({
  selector: 'app-chaos-input',
  imports: [CommonModule],
  templateUrl: './chaos-input.component.html',
  styleUrls: ['./chaos-input.component.css']
})
export class ChaosInputComponent {
  popups: Popup[] = [];
  nonClickCount = 0;

  openPopup(): void {
    const newPopup = this.createPopup();
    this.popups.push(newPopup);
  }

  closePopup(index: number, result: boolean): void {
    if (!result) {
      this.nonClickCount++;

      // Créer une nouvelle popup avec effet de mouvement aléatoire
      const newPopup = this.createPopup();
      newPopup.randomMovement = true;
      this.popups.push(newPopup);

      // Appliquer tous les effets chaotiques sur la nouvelle popup
      const newIndex = this.popups.length - 1;
      this.applyAllEffects(newIndex);

      // Si douze clics sur "Non", tout fermer
      if (this.nonClickCount >= 12) {
        this.resetPopups();
      }
    } else {
      console.log('Résultat :', result ? 'Oui' : 'Non');
      const newPopup = this.createPopup();
      this.popups.push(newPopup);
    }
  }

  // Créer une nouvelle pop-up avec une position aléatoire
  createPopup(): Popup {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;

    return {
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      id: Math.random().toString(36).substr(2, 9),
      megaZoom: false,
      randomMovement: false,
      rotation: false,
      colorChange: false,
      rotateEffect: false
    };
  }

  // Appliquer tous les effets à une popup
  applyAllEffects(index: number): void {
    this.triggerMegaZoom(index);
    this.triggerRotationEffect(index);
    this.changePopupColor(index);
    this.triggerRandomMovement(index);
    this.triggerRotateEffect(index);
    this.invertCursorEffect();
    this.triggerFullScreenShake();
    this.triggerBackgroundColorChange();
  }

  // Appliquer un méga zoom de 500% qui dure longtemps
  triggerMegaZoom(index: number): void {
    if (this.popups[index]) {
      this.popups[index].megaZoom = true;
      setTimeout(() => {
        if (this.popups[index]) {
          this.popups[index].megaZoom = false;
        }
      }, 10000); // Méga zoom pendant 10 secondes
    }
  }

  // Appliquer un effet de rotation à une popup
  triggerRotationEffect(index: number): void {
    if (this.popups[index]) {
      this.popups[index].rotation = true;
      setTimeout(() => {
        if (this.popups[index]) {
          this.popups[index].rotation = false;
        }
      }, 3000); // Rotation pendant 3 secondes
    }
  }

  // Appliquer un effet de rotation continu à une popup
  triggerRotateEffect(index: number): void {
    if (this.popups[index]) {
      this.popups[index].rotateEffect = true;
      setTimeout(() => {
        if (this.popups[index]) {
          this.popups[index].rotateEffect = false;
        }
      }, 5000); // Rotation continue pendant 5 secondes
    }
  }

  // Appliquer un changement de couleur de fond à une popup
  changePopupColor(index: number): void {
    if (this.popups[index]) {
      this.popups[index].colorChange = true;
      setTimeout(() => {
        if (this.popups[index]) {
          this.popups[index].colorChange = false;
        }
      }, 4000); // Changement de couleur pendant 4 secondes
    }
  }

  // Appliquer un effet de mouvement aléatoire à une popup
  triggerRandomMovement(index: number): void {
    if (this.popups[index]) {
      this.popups[index].randomMovement = true;
      setTimeout(() => {
        if (this.popups[index]) {
          this.popups[index].randomMovement = false;
        }
      }, 4500); // Mouvement aléatoire pendant 4,5 secondes
    }
  }

  // Appliquer l'effet d'inversion du curseur
  invertCursorEffect(): void {
    document.body.classList.add('invert-cursor');
    setTimeout(() => {
      document.body.classList.remove('invert-cursor');
    }, 5000); // Inversion du curseur pendant 5 secondes
  }

  // Appliquer un effet de secousse à tout l'écran
  triggerFullScreenShake(): void {
    document.body.classList.add('full-screen-shake');
    setTimeout(() => {
      document.body.classList.remove('full-screen-shake');
    }, 2000); // Secousse de l'écran pendant 2 secondes
  }

  // Changer la couleur de fond de la page temporairement
  triggerBackgroundColorChange(): void {
    document.body.classList.add('background-color-change');
    setTimeout(() => {
      document.body.classList.remove('background-color-change');
    }, 3000); // Changement de couleur de fond pendant 3 secondes
  }

  // Réinitialiser toutes les popups
  resetPopups(): void {
    this.popups = [];
    this.nonClickCount = 0;
  }
}
