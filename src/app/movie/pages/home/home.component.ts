import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  movies: any[] = [];
  img: string = "https://www.themoviedb.org/t/p/w220_and_h330_face/"

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getTopRatedMovies()
      .subscribe( res => { 
        this.movies = res.results;
      })
  }

}
