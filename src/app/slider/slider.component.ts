import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-slider',
 templateUrl: './slider.component.html',
 styleUrls: ['./slider.component.css']
 
})
export class SliderComponent implements OnInit {

 /* myInterval = 1500;*/
 myInterval : Number;
  activeSlideIndex = 0;
 
  slides = [
    {image: 'assets/caros1.jpg'},
    {image: 'assets/caros6.jpg'},
    {image: 'assets/caros7.jpg'}
  
  ];
  constructor() {
  }

 ngOnInit() {
  this.myInterval = 2500;
}
}