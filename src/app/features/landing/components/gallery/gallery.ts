import { Component } from '@angular/core';

interface GalleryImage {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  images: GalleryImage[] = [
    {
      image: 'assets/images/gallery-01.jpg',
      alt: 'Bicycle workshop',
    },

    {
      image: 'assets/images/gallery-02.jpg',
      alt: 'Bicycle mechanic',
    },

    {
      image: 'assets/images/gallery-03.jpg',
      alt: 'Road bicycle',
    },

    {
      image: 'assets/images/gallery-04.jpg',
      alt: 'Bicycle repair',
    },

    {
      image: 'assets/images/gallery-05.jpg',
      alt: 'Mountain bicycle',
    },

    {
      image: 'assets/images/gallery-06.jpg',
      alt: 'Bicycle components',
    },
  ];
}
