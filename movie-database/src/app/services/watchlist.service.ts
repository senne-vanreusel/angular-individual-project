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

  addMovieToWatchlist(id: number) {
    console.log("add movie tot watchlist "+id)
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    // return this.httpClient.put<any>(this.apiUrl + id, { headers: headers });
    return this.httpClient.post<any>('https://localhost:44319/api/MovieWatches', { id: id, watched: false, rating: 0, comment:"" })
  }

  removeFromWatchlist(id: number) {
    console.log('remove move with id ' + id)
    console.log(this.apiUrl + id)
    return this.httpClient.delete<any>(this.apiUrl+"MovieWatches/"+ id);
  }


  addMovieToWatched(id: number, rating:number = 0,comment:string="No comment") {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.put<any>('https://localhost:44319/api/MovieWatches/'+id, { id: id, watched: true, rating: rating, comment:comment })
  }

  removeMovieFromWatched(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.put<any>('https://localhost:44319/api/MovieWatches/'+id, { id: id, watched: false })
  }



}
