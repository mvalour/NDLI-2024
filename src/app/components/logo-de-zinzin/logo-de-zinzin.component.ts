import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-de-zinzin',
  templateUrl: './logo-de-zinzin.component.html',
  styleUrls: ['./logo-de-zinzin.component.css'],
  imports: [CommonModule],
})
export class LogoDeZinzinComponent {
  public opacity = 0.1;
  public currentStyle: any = {};
  public asciiMode = false;


  private animations = [
    'changeColor',
    'blurEffect',
    'teleport',
    'transformShape',
    'explode',
    'asciiMode',
    'rotate',
    'shake',
    'pulse',
  ];
  

  ngOnInit(): void {
    this.initializeLogo(); // Initialise la position et l'opacité
  }

  // Initialise le logo à un endroit aléatoire avec opacité 0.1
  private initializeLogo() {
    this.currentStyle = {
      opacity: 0.1, // Opacité initiale
      position: 'absolute',
      top: `${Math.random() * 80}vh`, // Position verticale aléatoire
      left: `${Math.random() * 80}vw`, // Position horizontale aléatoire
      transition: 'all 0.5s ease', // Transition douce pour les animations
    };
  }

  // Version ASCII du logo
  public asciiLogo = `
                                                                                                                             
                                                                                                                             
                                                                                                                             
                                                                                                                             
                                         ..--.                                                                               
                                 .----                                                                                       
                           .----.                                                                                            
                      .-----.                                                                                                
                   .-----                                                                                                    
               .------.                                                                                                      
             .------                                                                                                         
           -------      ####                                                                                                 
           ------       ####                                                                                                 
            ---.        ####       -##      ####  #### ####    ########       -########    ########.                         
            .--         ####       ####    +###   ########-  #####+######    #########-  ############                        
             ..         ####        ####   ####   ####      ####      ####  ####        ####      ####                       
                        ##+#        +###  ####    ####      ############## -###         ####       ####                      
                        ####         ########     ####      ####            ####        ####      .###.        .             
                        ##########.   ######      ####       #####   ###    ######.-##   #####+ ######        --.            
                        ###########.   ####       ####        ##########      #########    #########         .---            
                                     #####                                                                  .-----           
                                     ####                                                                  .------.          
                                      #                                                                  .------.            
                                                                                                       .-----.               
                                                                                                    .-----.                  
                                                                                                 .-----.                     
                                                                                             .----.                          
                                                                                        ----.                                
                                                                                ..--.                                        
                                                                                                                             
                                                                                                                             
                                                                                                                             
                                                                                                                             

`;

public startChaos() {
  this.currentStyle.opacity = 1; // Assure que le logo est visible
  this.teleport(); // Déplace le logo à chaque appel

  const numberOfActions = Math.ceil(Math.random() * 5); // Entre 1 et 3 actions aléatoires
  const selectedAnimations = [];

  // Sélectionne des animations aléatoires
  for (let i = 0; i < numberOfActions; i++) {
    const randomAnimation =
      this.animations[Math.floor(Math.random() * this.animations.length)];
    selectedAnimations.push(randomAnimation);
  }


  // Exécute les animations sélectionnées
  selectedAnimations.forEach((animation) => {
    switch (animation) {
      case 'changeColor':
        this.changeColor();
        break;
      case 'blurEffect':
        this.blurEffect();
        break;
      case 'teleport':
        this.teleport();
        break;
      case 'transformShape':
        this.transformShape();
        break;
      case 'explode':
        this.explode();
        break;
      case 'asciiMode':
        this.toggleAscii();
        break;
      case 'rotate':
        this.rotate();
        break;
      case 'shake':
        this.shake();
        break;
      case 'pulse':
        this.pulse();
        break;
    }
  });
}


  // Animation : Change la couleur
  private changeColor() {
    this.currentStyle = {
      ...this.currentStyle,
      filter: `hue-rotate(${Math.random() * 360}deg)`,
    };
  }

  // Animation : Applique un flou
  private blurEffect() {
    this.currentStyle = {
      ...this.currentStyle,
      filter: `blur(${Math.random() * 5}px)`,
    };
  }

  private teleport() {
    const maxWidth = window.innerWidth - 150; // Largeur maximale (150 = taille approximative du logo)
    const maxHeight = window.innerHeight - 150; // Hauteur maximale
    const newTop = Math.random() * maxHeight;
    const newLeft = Math.random() * maxWidth;
  
    this.currentStyle = {
      ...this.currentStyle,
      position: 'absolute',
      top: `${newTop}px`,
      left: `${newLeft}px`,
    };
  }
  

  // Animation : Transforme la forme
  private transformShape() {
    this.currentStyle = {
      ...this.currentStyle,
      borderRadius: `${Math.random() * 50}%`,
      transform: `scale(${Math.random() + 0.5})`,
    };
  }

  // Animation : Active/Désactive ASCII
  private toggleAscii() {
    this.asciiMode = !this.asciiMode;
  }

  private rotate() {
    const randomAngle = Math.random() * 360; // Angle aléatoire entre 0 et 360°
    this.currentStyle = {
      ...this.currentStyle,
      transform: `rotate(${randomAngle}deg)`,
    };
  }

  private shake() {
    this.currentStyle = {
      ...this.currentStyle,
      animation: 'shake 0.5s linear',
    };
  }

  private pulse() {
    this.currentStyle = {
      ...this.currentStyle,
      animation: 'pulse 1s infinite',
    };
  }

  private explode() {
    this.currentStyle = {
      ...this.currentStyle,
      animation: 'explode 1s forwards',
      opacity: 0.4, // Laisse le logo disparaître
    };
  }
  

}
