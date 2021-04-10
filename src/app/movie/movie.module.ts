import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './pages/series/series.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { SerieDetailComponent } from './pages/serie-detail/serie-detail.component';
import { ActorDetailComponent } from './pages/actor-detail/actor-detail.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';



@NgModule({
  declarations: [
    MoviesComponent,
    SeriesComponent,
    ActorsComponent,
    HomeComponent,
    MovieDetailComponent,
    SerieDetailComponent,
    ActorDetailComponent,
    SearchResultsComponent
  ],
  exports: [
    MoviesComponent,
    SeriesComponent,
    ActorsComponent,
    HomeComponent,
    MovieDetailComponent,
    SerieDetailComponent,
    ActorDetailComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class MovieModule { }
