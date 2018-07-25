import { Routes } from "@angular/router";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieComponent } from "./movie/movie.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MovieListComponent },
  { path: 'movie/:id', component: MovieComponent }
];