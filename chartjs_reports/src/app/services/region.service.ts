import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class RegionService {
   
  constructor(private http : HttpClient) { }

  public getRegions() {
    return this.http.get<any[]>(  environment.api_url + 'Regions');
  }

}
