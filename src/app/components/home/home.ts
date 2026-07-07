import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  totalSlides = 4;
  private autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide.update(val => (val + 1) % this.totalSlides);
  }

  prevSlide() {
    this.currentSlide.update(val => (val - 1 + this.totalSlides) % this.totalSlides);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  getCardStyle(index: number): any {
    const offset = (index - this.currentSlide() + this.totalSlides) % this.totalSlides;
    
    let transform = '';
    let opacity = 0;
    let zIndex = 0;
    
    // Increased translating layout gaps between the stacked cards
    if (offset === 0) {
      transform = 'translateX(0px) translateY(0px) scale(1)';
      opacity = 1;
      zIndex = 10;
    } else if (offset === 1) {
      transform = 'translateX(45px) translateY(15px) scale(0.93)';
      opacity = 0.65;
      zIndex = 5;
    } else if (offset === 2) {
      transform = 'translateX(90px) translateY(30px) scale(0.86)';
      opacity = 0.35;
      zIndex = 3;
    } else {
      transform = 'translateX(135px) translateY(45px) scale(0.79)';
      opacity = 0;
      zIndex = 1;
    }
    
    return {
      transform: transform,
      opacity: opacity,
      'z-index': zIndex
    };
  }
}