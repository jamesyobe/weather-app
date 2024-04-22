import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { WeatherInterface } from '../services/weather.inteface';
import { WeatherService } from '../services/weather.service';
import { WeatherHelper } from './weather.helpers';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  res: any;
  city = '';
  country = '';
  currentWeather: { value: string; iconPath: string } | undefined;
  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.setCurrentLocation();
    WeatherHelper.initalizeCodes();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.getWeatherData(latitude, longitude);
        this.getAddress(latitude, longitude);
      });
    }
  }

  getWeatherData(latitude: number, longitude: number) {
    this.weatherService
      .getWeatherData(latitude, longitude)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: WeatherInterface) => {
        this.res = response;
        this.currentWeather = WeatherHelper.weatherCodeMap.get(
          this.res?.current_weather?.weathercode
        );
      });
  }

  getAddress(latitude: number, longitude: number) {
    this.weatherService
      .getAddress(latitude, longitude)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.city = response?.results[0]?.address_components.city
          ? response?.results[0]?.address_components.city
          : '';
        this.country = response?.results[0]?.address_components.country
          ? response?.results[0]?.address_components.country
          : '';
      });
  }

  getPath(code: number) {
    let map = WeatherHelper.weatherCodeMap.get(code);
    if (map?.iconPath) {
      return map?.iconPath;
    } else {
      return null;
    }
  }
  getColor(temp: number) {
    if (temp >= 32) {
      return '#c70202';
    } else if (temp < 32 && temp >= 25) {
      return '#c72c2c';
    } else if (temp < 25 && temp >= 20) {
      return '#010e1c';
    } else if (temp < 20 && temp >= 15) {
      return '#023e9e';
    } else {
      return '#017780';
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
