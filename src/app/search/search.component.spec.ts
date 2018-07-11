import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SearchComponent } from './search.component';
import { CarouselService } from '../services/carousel.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let expected = "";

  beforeEach(async(() => {
    expected = "Search!";
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
    afterEach(() => {
      expected = "";
    });
  
    it(' should render Header ', () => {
      expect(component.search())
          .toEqual(expected);
    });
  });
