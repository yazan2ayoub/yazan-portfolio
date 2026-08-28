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

  // Touch Swipe State
  private touchStartX = 0;
  private touchEndX = 0;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.stopAutoSlide(); // Guard against duplicate intervals
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
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
    this.stopAutoSlide(); // Pause timer on explicit user interaction
  }

  // Mobile Touch Event Handlers
  onTouchStart(e: TouchEvent) {
    this.stopAutoSlide(); // Immediately freeze rotation when user touches card
    this.touchStartX = e.changedTouches[0].screenX;
  }

  onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 40;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide(); // Swiped left -> Next
      } else {
        this.prevSlide(); // Swiped right -> Previous
      }
    }
  }

  getCardStyle(index: number): any {
    const offset = (index - this.currentSlide() + this.totalSlides) % this.totalSlides;
    
    let transform = '';
    let opacity = 0;
    let zIndex = 0;
    
    if (offset === 0) {
      transform = 'translateX(0px) translateY(0px) scale(1)';
      opacity = 1;
      zIndex = 10;
    } else if (offset === 1) {
      transform = 'translateX(35px) translateY(12px) scale(0.94)';
      opacity = 0.65;
      zIndex = 5;
    } else if (offset === 2) {
      transform = 'translateX(70px) translateY(24px) scale(0.88)';
      opacity = 0.35;
      zIndex = 3;
    } else {
      transform = 'translateX(105px) translateY(36px) scale(0.82)';
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