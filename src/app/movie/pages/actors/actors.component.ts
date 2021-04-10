import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styles: [
  ]
})
export class ActorsComponent implements OnInit {

  actors: any[] = [];
  img: string = "https://www.themoviedb.org/t/p/w235_and_h235_face/"

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors(): void {
    this.movieService.getPopularActors()
      .subscribe( res => { 
        this.actors = res.results;
      })
  }

}
