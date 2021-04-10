import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];
  img: string = "https://www.themoviedb.org/t/p/w220_and_h330_face/"

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getPopularMovies()
      .subscribe( res => { 
        this.movies = res.results;
      })
  }

}
