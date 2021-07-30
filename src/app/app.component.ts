import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  myImages = ['ausbildung.jpg', 'final-schooling.jpg', 'web-developer.jpg'];
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
