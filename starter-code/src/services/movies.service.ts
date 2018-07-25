import { Injectable } from "../../node_modules/@angular/core";
import { create } from "domain";
import { movies } from '../sample-movies'

interface moviesInterface{
  id: number,
  title: string,
  poster: string,
  synopsis: string,
  genres: Array<string>,
  year: number,
  director: string,
  actors: Array<string>
}

@Injectable()
export class movieService {
  movies: Array<moviesInterface> = movies;
  getMovies(): Array<moviesInterface> {
    return this.movies;
  }
  getMovie(id: number): moviesInterface {
    let result;
    this.movies.forEach( e => {
      if(e.id === id) result = e;
    })
    return result
  }
}