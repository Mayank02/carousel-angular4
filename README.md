# Responsive Carousel

A Lightweight, Pure CSS based Fully Responsive Carousel in AngularJS 4 that has no Javascript/jQuery dependency.

This is responsive and asynchronous carousel using AngularJS 4, Type script, HTML5, SASS and CSS3.
It is carousel component with all controls which loads its content via HTTP service asynchronously and plays automatically (autoplay) with given interval as well as with user navigation.

# Technology Stack

Web Languages - HTML5, SASS CSS3, Javascript, Angular 4, Angular CLI, NPM, Typescript

Testing Frameworks- Protractor, Karma, Jasmine 

## Components

1) Responsive Carousel with controls
2) Responsive Menubar
3) Search for flights
3) Web Fonts - 'Open sans'

# Get Started

## Install Node Dependencies after clone

Run `npm install` command

## Start development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## Build

Run `ng build` to build the project. 
The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.

# Testing
Tested with unit test and end to end test.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Technical Documentation

## Responsive Style

Regarding responsive style break point of screen in different devices like Mobile, Tablet and Desktop is respectively : 
```html
  @media screen and (max-width: 468px)
  @media only screen and (min-width: 768px)
  @media only screen and (min-width: 992px)
````
## Responsive Style

Global CSS is defined in `assets/css/style.css`, where as all the individual component's responsive css(sass) is written in component folder itself.
```html
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
```

## Responsive Menubar HTML

```html
<nav>
    <label for="show-menu" class="show-menu">&#9776;</label>
    ...
    <ul id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Plan en boek</a></li>
        ...
    </ul>
</nav>
```
## Responsive Carousel slider HTML

Here is the html structure of slider how this gets rendered in browser

```html
<div class="mySlides fade-bullet" >
      <div class="mobile-serach">
          <strong>Plan en boek</strong>
          <input type="search" placeholder="Stel uw vraag" class="search"/>
      </div>
      <div class="blocktext visibility-hidden">
          ...
      </div>
      <img *ngIf="current.url" src="../assets{{current.url}}" style="width:100%">
      <div class="placeholder visibility-hidden">
        <div class="search-content">
          ...
        </div>
      </div>
</div>
```

## Responsive Carousel slider contorl HTML

This is the html strucutre of controls for slide like next, prev and bullets

```html
<div class="controls" [style.visibility]="isVisible" >
  <a class="prev" (click)="prevSlide()">&#10094;</a>
  <a class="next" (click)="nextSlide()">&#10095;</a>

  <p class="bullet">
    <span class="dot" [ngClass]="{'active': slideIndex === i+1}" (click)="currentSlide(i)" *ngFor="let item of slidesData; let i = index"></span>
  </p>
</div>
```

## Responsive Carousel Style

```html
<link rel="stylesheet" type="text/css" href="assets/css/carousel.css">
```

## Carousel service

Caroudal service which helps to get the data for slider

```js 
  fetchCarouselData(): Observable<any> {
    return this.http.get('../../assets/data.json').map(response => response.json());
  }
```

## Carousel Controls

Navigate to previous slide on click of prev button

```js 
   prevSlides() {
    if (this.autoPlay) {
      clearInterval(this.interval);
      this.showSlides(this.slideIndex -= 2)
    } else {
      this.showSlides(this.slideIndex -= 1);
    }
  }
```

Navigate to next slide on click of next button

```js  
   nextSlides() {
    this.showSlides(this.slideIndex += 1);
  }

```

When click on bullet show the selected slide on carousel

```js 
  currentSlide(n) {
    if (window.innerWidth < 321) {
      return;
    }
    this.showSlides(this.slideIndex = n);
  }
```

Setup the auto play for the carousel

```js 
  setAutoPlay(ms) {
    this.autoPlay = true;
    this.intervalTime = ms;
    this.slideIndex++ ;
    this.interval = setInterval(this.showSlides.bind(this, this.slideIndex), ms);
  }
```