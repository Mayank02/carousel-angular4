import { Component, AfterViewInit, Input, OnInit, HostListener } from '@angular/core';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnInit {
  current = {};
  autoPlay = true;
  intervalTime = 2000;
  interval: any;
  isVisible = 'visible';
  slidesData: any;
  slideIndex = 0;

  /**
   * Set the visibility of control on window resize
   * @param {resize'} 'window    window resize event
   * @param {[event]}  '$event']) onWindowResize( event object
   */
  @HostListener('window:resize', ['$event']) onWindowResize() {
    if (window.innerWidth < 769) {
      this.isVisible = 'visible';
    } else {
      this.isVisible = 'hidden';
    }

  }

  constructor(private carouselService: CarouselService) {

  }

  /**
   * Initialize the component and set the visibility of control based on the size
   */
  ngOnInit() {
    if (window.innerWidth < 769) {
      this.isVisible = 'visible';
    }
  }

  /**
   * Once component initialized fetch the carousel data from the service and start the slide show
   */
  ngAfterViewInit() {
    this.carouselService.fetchCarouselData()
      .subscribe(data => {
        this.slidesData = data;
        this.showSlides(this.slideIndex);
      }, (err) => { console.log(err) });
  }

  /**
   * Set the slide to show in the slider
   * @param {[number]} n current index of the slide
   */
  showSlides(n) {
    if (n > this.slidesData.length - 1) { this.slideIndex = 0 }
    if (n < 0) { this.slideIndex = this.slidesData.length - 1 }

    this.current = this.slidesData[this.slideIndex]

    if (this.autoPlay) {
      clearInterval(this.interval);
      this.setAutoPlay(this.intervalTime);
    };
  }

  /**
   * On click of previous slide button set the previous slide to slider
   */
  prevSlide() {
    if (this.autoPlay) {
      clearInterval(this.interval);
      this.showSlides(this.slideIndex -= 2)
    } else {
      this.showSlides(this.slideIndex -= 1);
    }
  }

  /**
   * On click of next slide button set the next slide to slider
   */
  nextSlide() {
    this.showSlides(this.slideIndex += 1);
  }

  /**
   * When click on bullet show the slide on carousel
   * @param {[number]} n Index of the slide in data array
   */
  currentSlide(n) {
    if (window.innerWidth < 321) {
      return;
    }
    this.showSlides(this.slideIndex = n);
  }

  /**
   * This method will help to setup the auto play for the carousel
   * @param {[numer]} ms Time interval
   */
  setAutoPlay(ms) {
    this.autoPlay = true;
    this.intervalTime = ms;
    this.slideIndex++;
    this.interval = setInterval(this.showSlides.bind(this, this.slideIndex), ms);
  }
}
