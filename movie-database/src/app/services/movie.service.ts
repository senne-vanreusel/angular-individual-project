import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



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
  apiUrl: string = "http://www.omdbapi.com/?apikey=7391ecaa&plot=full"
  apiKeyV2: string="?api_key=" + environment.api_key
  apiUrlV2: string = "https://api.themoviedb.org/3/";

  constructor(private httpClient: HttpClient) {

  }

  getMovies() : Observable<Movie>{
    // console.log(this.apiUrl + "&s=" + title)
    console.log(this.apiUrlV2+"movie/popular"+this.apiKeyV2)
    // return this.httpClient.get<any>(this.apiUrl + "&s=" + title);
    return this.httpClient.get<Movie>(this.apiUrlV2+"movie/popular"+this.apiKeyV2);

  }

  getMoviesById(id: number) : Observable<Movie> {
    console.log(this.apiUrlV2+"movie/"+id+this.apiKeyV2)
    // return this.httpClient.get<Movie>(this.apiUrl+"&i="+id);
    return this.httpClient.get<Movie>(this.apiUrlV2+"movie/"+id+this.apiKeyV2);
  }

  getMoviesWName(title:string): Observable<Movie>{

    console.log(this.apiUrlV2+"search/movie"+this.apiKeyV2+"&query="+title)

    return this.httpClient.get<Movie>(this.apiUrlV2+"search/movie"+this.apiKeyV2+"&query="+title);
  }

  getMoviesWYear(title:string, year:string): Observable<Movie>{

      console.log(this.apiUrlV2+"search/movie"+this.apiKeyV2+"&query="+title+"&primary_release_year="+year)

      return this.httpClient.get<Movie>(this.apiUrlV2+"search/movie"+this.apiKeyV2+"&query="+title+"&primary_release_year="+year);
  }


}
