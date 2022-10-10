import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'postcss';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { Watchlist } from 'src/app/interfaces/watchlist';
import { MovieService } from 'src/app/services/movie.service';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {


  watchlist: Watchlist[] = [];
  movies: any = [];
  watch!: Watchlist;
  inWatchList!: boolean;
  inWatched!: boolean;

  constructor(private watchlistService: WatchlistService, private route: ActivatedRoute, private movieService: MovieService,private router: Router) {
  }

  ngOnInit(): void {
    const movieId = 642885;
    this.watchlistService.getMovies().subscribe(
      result =>this.getAllMovies(result)
    );
    console.log("watchlist" + this.watchlist)
  }

  detail(id: number) {
    this.router.navigate(['/movie',id])
  }

  getAllMovies(result:Watchlist[]) {
    console.log(result)
    this.watchlist = result

    result.forEach(movie => {
      console.log(movie.id)
      if (!movie.watched) {
        this.movieService.getMoviesById(parseInt(movie.id)).subscribe(
          result => this.movies.push(this.changeImg(result))
        )
      }
    });
    console.log("movies"+this.movies)
  }


  removeFromWatchlist(id: number) {
    console.log("remove movie")

    this.watchlistService.removeFromWatchlist(id).subscribe(
      result => {
           window.location.reload();
          this.getAllMovies(result)
      }
    );
  }



  addMovieToWatched(id: number) {
    console.log("add To Watched")
    this.watchlistService.addMovieToWatched(id).subscribe(
      result => {
          window.location.reload();
          this.getAllMovies(result)
      }

    );
  }

  changeImg(result: any): any {
    if (!result.poster_path) {
      result.poster_path =
        'https://image.tmdb.org/t/p/original' +
        result.backdrop_path +
        '?api_key=' +
        environment.api_key;
    } else {
      result.poster_path =
        'https://image.tmdb.org/t/p/original' +
        result.poster_path +
        '?api_key=' +
        environment.api_key;
    }
    return result
  }

}
