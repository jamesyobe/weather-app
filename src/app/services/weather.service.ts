import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(latitude: number, longitude: number): Observable<any> {
    let queryString = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&daily=weathercode,precipitation_sum&timezone=US/Central&current_weather=true`;
    return this.http.get(queryString);
  }

  getAddress(latitude: number, longitude: number): Observable<any> { 
      let queryString = `https://api.geocod.io/v1.7/reverse?q=${latitude},${longitude}&api_key=${environment.gioCodeApiKey}&limit=1`;
    return this.http.get(queryString);
  }

}
