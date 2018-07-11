import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CarouselService } from './carousel.service';

describe('CarouselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselService],
      imports: [HttpModule],
    });
  });

  it('should be created.', inject([CarouselService], (service: CarouselService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Array>.',
  inject([CarouselService], (carouselService) => {
    carouselService.fetchCarouselData().subscribe((Carousel) => {
      expect(Carousel.length).toBe(5);
      expect(Carousel[0].title).toEqual('India');
      expect(Carousel[1].title).toEqual('Amsterdam');
      expect(Carousel[2].title).toEqual('London');
      expect(Carousel[3].title).toEqual('Shri Lanka');
      expect(Carousel[4].title).toEqual('USA');
    });
}));

});
