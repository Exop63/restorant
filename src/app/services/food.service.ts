import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FoodItem, FoodParam, GeoLocation } from '../@theme/components/models/list-item.models';
import { GeoLocationService } from './geo-location.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private pathSuffix: string = 'mock/getFeed';
  private path: string = '';
  private location: any = undefined;
  constructor(@Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient,
    private geoLocationService: GeoLocationService,
  ) {
    this.path = apiUrl + this.pathSuffix;
    this.getUserLocation();

  }

  getFood(param: FoodParam): Observable<FoodItem[]> {
    let isHaveLocation: boolean = this.location !== null && this.location !== undefined;
    if (isHaveLocation) {
      param.latitude = this.location.coords.latitude;
      param.longitude = this.location.coords.longitude;
    }

    return this.httpClient.post<any>(this.path, param).pipe(
      switchMap(response => {
        if (isHaveLocation) {
          response.response.map(el => {
            let distance: number = this.geoLocationService.getDistanceFromLatLonInKm(
              this.location.coords.latitude,
              this.location.coords.longitude,
              el.location.coordinates[1],
              el.location.coordinates[0]);

            el['distance'] = distance.toFixed(0);
          });

        }
        return of(response.response)
      })
    );


  }
  getUserLocation() {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {
        this.location = position;

      });
    } else {
      console.log("User not allow")

    }
  }
}
