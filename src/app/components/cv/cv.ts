import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.html',
  styleUrls: ['./cv.css']
})
export class CvComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Allows Angular view elements to register layouts before applying animation coordinates
    setTimeout(() => {
      AOS.init({
        duration: 750,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false
      });
      AOS.refresh();
    }, 100);
  }
}