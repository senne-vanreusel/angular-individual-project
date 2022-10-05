import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;

  constructor(private movieService: MovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId != null) {
      this.movieService.getMoviesById(movieId).subscribe(
        result => {
          this.movie = result;
        }
      )

    }

  }

}
