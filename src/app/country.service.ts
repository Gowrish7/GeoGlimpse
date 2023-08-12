import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import Observable
import { Country } from './country.model'; // Import the Country interface

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v2/all';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }



}


