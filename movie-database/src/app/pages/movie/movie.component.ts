import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie!: Movie ;

  constructor() { }

  ngOnInit(): void {
  }

}
