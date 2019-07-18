import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsApiService {
  apiUrl: string = 'https://swapi.co/api';

  constructor(private httpClient: HttpClient) { }
  
  getMovieList(){
    return this.httpClient.get(this.apiUrl + '/films');
  }

  getServicesByUrl(url){
    return this.httpClient.get(url);
  }
}
