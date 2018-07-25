import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { movieService } from '../services/movies.service';

import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [movieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
