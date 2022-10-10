import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { Watchlist } from 'src/app/interfaces/watchlist';

import { MovieService } from 'src/app/services/movie.service';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie!: any ;
  watchlist: Watchlist[] = [];
  movies: Movie[] = [];

  constructor(private router: Router, private watchlistService: WatchlistService, private movieService:MovieService) { }

  ngOnInit(): void {
  }

  detail(id: number) {
    this.router.navigate(['/movie',id])
  }

  addMovieToWatchlist(id: number) {
    console.log("add movie to watchlist from movieComponent " + id)


    this.watchlistService.addMovieToWatchlist(id).subscribe(
      result => {
        this.router.navigate(['watchlist'])
        this.getAllMovies(result);
      }

    );
  }

  getAllMovies(result:Watchlist[]) {
    console.log("result"+result)
    this.watchlist = result

    result.forEach(movie => {
      console.log("Movie ID "+movie.id)
      this.movieService.getMoviesById(parseInt(movie.id)).subscribe(
        result => this.movies.push(result)
      )
    });
    console.log("movies"+this.movies)
  }

  addMovieToWatched(id: number) {
     this.watchlistService.addMovieToWatched(id);
   }


}
