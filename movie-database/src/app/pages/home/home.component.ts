import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies!: Movie;

  search!: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.movieService.getMovies().subscribe(result => {
      this.movies = this.modifyData(result);
      console.log(this.movies)
    });
  }

  searchMovie() {
    this.movieService.getMoviesWName(this.search).subscribe(result => {
      this.movies = this.modifyData(result);
   });
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

    modifyData(movies: Movie): Movie {
    if (movies.results) {
      movies.results.forEach((element) => {
        element.poster_path =
          'https://image.tmdb.org/t/p/original/' +
          element.poster_path +
          '?api_key=' +
          environment.api_key;
        if (!element.title) {
          element.title = element?.original_title;
        }
      });
    }
    return movies;
  }

}
