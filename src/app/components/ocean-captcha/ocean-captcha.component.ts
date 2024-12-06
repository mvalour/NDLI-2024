import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../types/animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ocean-captcha',
  imports: [CommonModule],
  templateUrl: './ocean-captcha.component.html',
  styleUrls: ['./ocean-captcha.component.css'],
})
export class OceanCaptchaComponent implements OnInit {
  animals: Animal[] = [];
  referenceSound: string = '';
  referenceImage: string = '';
  referenceName: string = '';
  options: { label: string; src: string }[] = [];
  feedback: string | null = null;
  showCaptcha: boolean = true;

  currentStep: number = 1;
  totalSteps: number = 3;
  selectedOption: number | null = null;
  usedAnimals: Animal[] = [];
  currentAudio: HTMLAudioElement | null = null;
  isValidating: boolean = false;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.loadAnimals();
  }

  loadAnimals(): void {
    this.animalService.getAnimals().subscribe((data) => {
      this.animals = data;
      this.generateCaptcha();
    });
  }

  playSound(src: string): void {
    this.stopCurrentAudio();
    this.currentAudio = new Audio(src);
    this.currentAudio.play();
  }

  stopCurrentAudio(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
  }

  generateCaptcha(): void {
    const availableAnimals = this.animals.filter(
      (animal) => !this.usedAnimals.includes(animal)
    );

    const correctAnimal =
      availableAnimals[Math.floor(Math.random() * availableAnimals.length)];

    this.usedAnimals.push(correctAnimal);

    const incorrectAnimals = this.animals
      .filter((animal) => animal !== correctAnimal)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    this.referenceSound = correctAnimal.referenceSrc;
    this.referenceImage = correctAnimal.image;
    this.referenceName = correctAnimal.name;

    this.options = [...incorrectAnimals, correctAnimal]
      .sort(() => Math.random() - 0.5)
      .map((animal) => ({
        label: animal.name,
        src: animal.imitationSrc,
      }));

    this.feedback = null;
    this.selectedOption = null;
    this.isValidating = false;
  }

  resetCaptcha(): void {
    this.feedback = 'Incorrect... Le captcha redémarre 🌊';
    setTimeout(() => {
      this.currentStep = 1;
      this.usedAnimals = [];
      this.generateCaptcha();
    }, 2000);
  }

  selectOption(index: number): void {
    this.selectedOption = index;
    this.playSound(this.options[index].src);
  }

  validateAnswer(): void {
    if (this.isValidating || this.selectedOption === null) return;

    this.isValidating = true;
    const correctAnimal = this.animals.find(
      (animal) => animal.referenceSrc === this.referenceSound
    );

    if (this.options[this.selectedOption].src === correctAnimal?.imitationSrc) {
      this.feedback = 'Correct ! Bien joué 🎉';

      if (this.currentStep < this.totalSteps) {
        setTimeout(() => {
          this.currentStep++;
          this.stopCurrentAudio();
          this.generateCaptcha();
        }, 2000);
      } else {
        setTimeout(() => {
          this.stopCurrentAudio();
          this.showCaptcha = false;
        }, 2000);
      }
    } else {
      this.resetCaptcha();
    }
  }
}
