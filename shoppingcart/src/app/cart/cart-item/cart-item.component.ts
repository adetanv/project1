import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  slideIndex = 1;

  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  plusSlides(n) {
   this. showSlides(n);
  }

  currentSlide(n) {
    this.showSlides( n);
  }

  showSlides(n) {
    var i;
    var slides :any = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].na.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
    
  }
}
