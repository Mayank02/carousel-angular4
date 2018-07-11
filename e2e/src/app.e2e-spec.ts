import { Carousel } from './app.po';
import { browser, by, element } from 'protractor';

describe('KLM carousel app', () => {
  let page: Carousel;

  beforeEach(() => {
    page = new Carousel();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.waitForAngularEnabled(false);
    browser.get('src/assets/slidedata.json')
    expect(page.getParagraphText()).toEqual('carousel');
  });
});
