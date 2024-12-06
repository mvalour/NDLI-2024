import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-de-zinzin',
  templateUrl: './logo-de-zinzin.component.html',
  styleUrls: ['./logo-de-zinzin.component.css'],
  imports: [CommonModule],
})
export class LogoDeZinzinComponent {
  public opacity = 1; // Visible par défaut
  public currentStyle: any = {}; // Style initial
  public asciiMode = false; // Mode ASCII désactivé par défaut
  public isActive = false; // Définit si les animations peuvent être activées

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
    this.initializeLogo(); // Initialise la position fixe du logo
  }

  // Place le logo à une position fixe de base
  private initializeLogo() {
    this.currentStyle = {
      position: 'absolute',
      top: '50%', // Centre verticalement
      left: '50%', // Centre horizontalement
      transform: 'translate(-50%, -50%)', // Centre exact
      opacity: this.opacity,
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

  // Active les animations au clic
  public activateAnimations() {
    this.isActive = true; // Permet les animations sur hover
    console.log('Animations activées !');
  }

  public startChaos() {
    if (!this.isActive) return; // Si les animations ne sont pas activées, on ne fait rien

    this.teleport();

    // Vérifie si aucune animation ne doit se déclencher
    const noAnimationChance = Math.floor(Math.random() * 144); // Chance sur 144
    if (noAnimationChance === 0) {
      console.log('Pas d’animation cette fois !');
      return; // Arrête la fonction si le tirage est 0
    }

    // Si une animation doit se déclencher, continue
    const numberOfActions = Math.ceil(Math.random() * 5); // Entre 1 et 5 actions aléatoires
    const selectedAnimations: string[] = [];

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

  // Animations

  private changeColor() {
    this.currentStyle = {
      ...this.currentStyle,
      filter: `hue-rotate(${Math.random() * 360}deg)`,
    };
  }

  private blurEffect() {
    this.currentStyle = {
      ...this.currentStyle,
      filter: `blur(${Math.random() * 5}px)`,
    };
  }

  private teleport() {
    const maxWidth = window.innerWidth - 150; // Largeur maximale (150 = taille du logo)
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

  private transformShape() {
    this.currentStyle = {
      ...this.currentStyle,
      borderRadius: `${Math.random() * 50}%`,
      transform: `scale(${Math.random() + 0.5})`,
    };
  }

  private toggleAscii() {
    this.asciiMode = !this.asciiMode;
  }

  private rotate() {
    const randomAngle = Math.random() * 360; // Angle aléatoire
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
