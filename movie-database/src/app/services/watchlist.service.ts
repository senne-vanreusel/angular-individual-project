import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  apiUrl: string ="https://localhost:44319/api/"

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    console.log(this.apiUrl+"MovieWatches");
    return this.httpClient.get<any>(this.apiUrl+"MovieWatches");
    }

  addMovieToWatchlist(id: string) {
    console.log("add movie tot watchlist "+id)
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    // return this.httpClient.put<any>(this.apiUrl + id, { headers: headers });
    return this.httpClient.post<any>('https://localhost:44319/api/MovieWatches', { id: id, watched: true, rating: 4.5, comment:"69 nice" })

  }

  removeFromWatchlist(id: string) {
    console.log('remove move with id ' + id)
    console.log(this.apiUrl + id)
    return this.httpClient.delete<any>(this.apiUrl+"MovieWatches/"+ id);
  }


    addMovieToWatched(id: string) {
      alert("added movie to watched")
    }




}
