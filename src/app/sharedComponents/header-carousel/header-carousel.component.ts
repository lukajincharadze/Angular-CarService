import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-carousel',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './header-carousel.component.html',
  styleUrl: './header-carousel.component.scss',
})
export class HeaderCarouselComponent {
  translate: number = 0;
  contwidth = 100;

  ngOnInit() {
    this.contwidth = 100 * this.images.length;
  }

  images = [
    '../../../assets/img/heroimage.png',
    // '../../../assets/img/heroimage2.png',
  ];

  prev() {
    this.translate =
      this.translate == 0
        ? -(100 - 100 / this.images.length)
        : this.translate + 100 / this.images.length;
  }
  next() {
    this.translate =
      this.translate == -(100 - 100 / this.images.length)
        ? 0
        : this.translate - 100 / this.images.length;
  }
}
