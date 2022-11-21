import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { Watchlist } from 'src/app/interfaces/watchlist';
import { MovieService } from 'src/app/services/movie.service';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent implements OnInit {

  watchlist: Watchlist[] = [];
  movies: any = [];
  watched: boolean= true;
  rating!: number;
  comment!: string;
  search!: string;

  sort!: number;

  constructor(private router: Router,private watchlistService: WatchlistService, private movieService: MovieService) { }

  ngOnInit(): void {
      this.watchlistService.getMovies().subscribe(
      result =>this.getAllMovies(result)
    );
  }

  changeSorting() {
    console.log(this.sort);
    this.getAllMovies

    if (this.sort == 0) {
      // this.movies.sort((a: any,b:any) => a.rating.rendered.localeCompare(b.rating.rendered));
      this.movies.sort((a: any,b:any) => a.rating - b.rating);

    } else if (this.sort == 1) {
      this.movies.sort((a: any,b:any) => b.rating - a.rating);

    }
  }

  searchNameandComment() {
    if (this.search == "") {
      this.movies = []
      this.ngOnInit();
    } else {
      this.movies = this.movies.filter((movie: any) => movie.title.toLowerCase().includes(this.search.toLowerCase()) || movie.comment.toLowerCase().includes(this.search.toLowerCase()));
    }


  }
    getAllMovies(result:Watchlist[]) {
    console.log(result)
    this.watchlist = result

    result.forEach(movie => {
      if (movie.watched) {

        this.movieService.getMoviesById(parseInt(movie.id)).subscribe(
          result => {
            this.movies.push(this.changeImg(result))
            this.movies[this.movies.length - 1].rating = movie.rating;
            this.movies[this.movies.length-1].comment = movie.comment;
            console.log(this.movies);
           }
      )
      }

    });
    console.log("movies"+this.movies)
    }


  updateRating(id: number) {
    console.log(id)
    console.log(this.rating + " " + this.comment);
    this.watchlistService.addMovieToWatched(id, this.rating, this.comment)
    this.watchlistService.addMovieToWatched(id, this.rating, this.comment).subscribe(
      result => {
        this.router.navigate(['watched'])
        this.getAllMovies(result);
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

  detail(id: number) {
    this.router.navigate(['/movie',id])
  }

  removeMovieToWatched(id: number) {
    console.log("add To Watched")
    this.watchlistService.removeMovieFromWatched(id).subscribe(
      result => {

          this.router.navigate(['watchlist'])
        this.getAllMovies(result)
      }

    );
  }

}
