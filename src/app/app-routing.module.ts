import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorDetailComponent } from './movie/pages/actor-detail/actor-detail.component';
import { ActorsComponent } from './movie/pages/actors/actors.component';
import { HomeComponent } from './movie/pages/home/home.component';
import { MovieDetailComponent } from './movie/pages/movie-detail/movie-detail.component';
import { MoviesComponent } from './movie/pages/movies/movies.component';
import { SearchResultsComponent } from './movie/pages/search-results/search-results.component';
import { SerieDetailComponent } from './movie/pages/serie-detail/serie-detail.component';
import { SeriesComponent } from './movie/pages/series/series.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'actors',
    component: ActorsComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'serie/:id',
    component: SerieDetailComponent,
  },
  {
    path: 'actor/:id',
    component: ActorDetailComponent,
  },
  {
    path: 'search/:query',
    component: SearchResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
