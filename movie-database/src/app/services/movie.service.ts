import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export type Response={
    Response: string,
    Search: Movie[],
    Total: string;
}

@Injectable({
  providedIn: 'root'
})


export class MovieService {

  apiKey: string = "7391ecaa"
  apiUrl: string="http://www.omdbapi.com/?apikey=7391ecaa"

  constructor(private httpClient: HttpClient) {

  }

  getMovies(title: string) {
    console.log(this.apiUrl+"&s="+title)
    return this.httpClient.get<any>(this.apiUrl+"&s="+title);
  }


}
