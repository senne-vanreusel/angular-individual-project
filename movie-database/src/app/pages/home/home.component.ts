import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies!: Movie[];

  search!: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.movieService.getMovies("guardians").subscribe(result => {
      this.movies = result.Search;
      console.log(this.movies)
    });
  }

  searchMovie() {
    this.movieService.getMovies(this.search).subscribe(result => {
      this.movies = result.Search;
      console.log(this.movies)
    });
  }

}
