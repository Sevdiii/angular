import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  myImages = ['ausbildung.jpg', 'final-schooling.jpg', 'web-developer.jpg'];
  myHeadlines = ['IT Education',
   'Graduated at Abitur', 
   'Bringing engineering to the next level'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
}
  updateImage() {

    setInterval(() => {
this.currentImage++;
this.currentImage = this.currentImage % this.myImages.length;
this.showImage = false;

setTimeout(() => {
  this.showImage = true;
}, 10)
    }, 5000)

  }


}
