import { Component, OnInit } from '@angular/core';
import { movieService } from '../../services/movies.service'
import { ActivatedRoute } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
  constructor(public movieService:movieService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.movie = this.movieService.getMovie(Number(params['id'])))
  }

}
