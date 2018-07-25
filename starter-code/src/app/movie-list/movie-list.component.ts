import { Component, OnInit } from '@angular/core';
import { movieService } from '../../services/movies.service'
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Array<any>;
  constructor(public movieService:movieService) {
    this.movieList = movieService.movies
  }

  ngOnInit() {
  }

}
