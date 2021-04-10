import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styles: [
  ]
})
export class ActorDetailComponent implements OnInit {

  actor!: any;
  related: any[] = []
  img: string = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"
  img2: string = "https://www.themoviedb.org/t/p/w250_and_h141_face/"

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.movieService.getActor(id) )
    )
    .subscribe( (actor: any) => {
      this.actor = actor;
    })

  }

}
