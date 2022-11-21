import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { Watchlist } from 'src/app/interfaces/watchlist';
import { MovieService } from 'src/app/services/movie.service';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie!: any;
  movies: any[] = [];
  watchlist: Watchlist[] = [];
   rating!: number;
  comment!: string;
  index!: number;

  constructor(private movieService: MovieService, private route:ActivatedRoute,private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId != null) {
      this.movieService.getMoviesById(parseInt(movieId)).subscribe(
        result => {
          this.movie = this.changeImg(result);

          // this.index = this.watchlist.map(obj => obj.id).indexOf(this.movie.id)
          // console.log(this.index)
          // this.movies[this.movies.length - 1].rating = this.watchlist[this.index].rating;
          // this.movies[this.movies.length-1].comment = this.watchlist[this.index].comment;
          // this.movies[this.movies.length-1].watched = this.watchlist[this.index].watched;
          // console.log(this.movie);
        }
      )
    }
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
     result.production_companies[0].logo_path =
        'https://image.tmdb.org/t/p/original' +
        result.production_companies[0].logo_path +
        '?api_key=' +
        environment.api_key;
    return result
   }

    addMovieToWatchlist(id: number) {
    console.log("add movie to watchlist from movieComponent " + id)


    this.watchlistService.addMovieToWatchlist(id).subscribe(
      result => {
        alert("added to Watchlist")
        this.getAllMovies(result)
       }
    );
    }

   getAllMovies(result:Watchlist[]) {
    console.log("result"+result)
    this.watchlist = result

    result.forEach(movie => {
      this.movieService.getMoviesById(parseInt(movie.id)).subscribe(
        result => {
          this.movies.push(result)
          this.movies[this.movies.length - 1].rating = movie.rating;
          this.movies[this.movies.length-1].comment = movie.comment;
          this.movies[this.movies.length-1].watched = movie.watched;
        }

      )
    });
    console.log("movies"+this.movies)
   }

   updateRating(id: number) {
    console.log(id)
    console.log(this.rating + " " + this.comment);
    this.watchlistService.addMovieToWatched(id, this.rating, this.comment)
    this.watchlistService.addMovieToWatched(id, this.rating, this.comment).subscribe(
      result => {
        this.addMovieToWatchlist(id);
        // window.location.reload();
        this.getAllMovies(result);
      }

    );
  }


}
