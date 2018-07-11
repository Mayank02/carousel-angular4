import {async, fakeAsync, TestBed, tick, ComponentFixture} from '@angular/core/testing';
import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {

  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let expected = "";
  
  beforeEach(async(() => {
    expected = "Header!";
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    headerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });
  
    afterEach(() => {
      expected = "";
    });
  
    it(' should render Header ', () => {
      expect(headerComponent.header())
          .toEqual(expected);
    });
  });
