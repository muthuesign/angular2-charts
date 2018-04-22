import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../shared/constants';
import { Gallery } from '../models/gallery';
import { Observable } from 'rxjs/Observable';

import { Analytics } from '../models/analytics';
import { Data } from '../models/data';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }
  
  public getMySkillAnalytics() : Observable<Array<Analytics>> {
    return this.http.get<Array<Analytics>>(Constants.dataUrls.getMySkillAnalytics);
  }

  public getUserAgents() : Observable<Array<Data>> {
    return this.http.get<Array<Data>>(Constants.dataUrls.getUserAgents);
  }

  public getGalleries() : Observable<Array<Gallery>> {
    return this.http.get<Array<Gallery>>(Constants.dataUrls.getGalleries);
  }
}