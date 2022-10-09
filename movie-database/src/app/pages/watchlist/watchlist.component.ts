import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'postcss';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { Watchlist } from 'src/app/interfaces/watchlist';
import { MovieService } from 'src/app/services/movie.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {


  watchlist: Watchlist[] = [];
  movies: Movie[] = [];

  constructor(private watchlistService: WatchlistService, private route: ActivatedRoute, private movieService: MovieService,private router: Router) {


  }

  ngOnInit(): void {
    const movieId = "tt2015381";
    this.watchlistService.getMovies().subscribe(
      result =>this.getAllMovies(result)
    );
    console.log("watchlist" + this.watchlist)
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

  removeFromWatchlist(id: string) {
    console.log("remove movie")

    this.watchlistService.removeFromWatchlist(id).subscribe(
      result =>this.getAllMovies(result)
    );
    window.location.reload();
  }



  add(id:string) {

  }

}
