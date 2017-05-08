import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodService {
  constructor(private http: Http) {}

  getAll(): Observable<any> {
    return this.http
      .get('assets/ciqual_2016.json')
      .map(item => item.json());
  }
}