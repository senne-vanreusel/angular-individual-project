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

  @Input() movie!: Movie ;
  watchlist: Watchlist[] = [];
  movies: Movie[] = [];

  constructor(private router: Router, private watchlistService: WatchlistService, private movieService:MovieService) { }

  ngOnInit(): void {
  }

  detail(id: string) {
    this.router.navigate(['/movie',id])
  }

  addMovieToWatchlist(id: string) {
    console.log("add movie to watchlist from movieComponent " + id)


    this.watchlistService.addMovieToWatchlist(id).subscribe(
      result =>this.getAllMovies(result)
    );
  }

  getAllMovies(result:Watchlist[]) {
    console.log(result)
    this.watchlist = result

    result.forEach(movie => {
      console.log(movie.id)
      this.movieService.getMoviesById(movie.id).subscribe(
        result => this.movies.push(result)
      )
    });
    console.log("movies"+this.movies)
  }

  addMovieToWatched(id: string) {
     this.watchlistService.addMovieToWatched(id);
   }


}
