import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarouselService {
  
  constructor(private http: Http) { }

  /**
   * This method is going to fetch data from server and returns an observable array
   */
  fetchCarouselData(): Observable<any> {
    return this.http.get('../../assets/data.json').map(response => response.json());
  }

}
