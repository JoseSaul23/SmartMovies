import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styles: [
  ]
})
export class SerieDetailComponent implements OnInit {

  serie!: any;
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
      switchMap( ({id}) => this.movieService.getSerie(id) )
    )
    .subscribe( (serie: any) => {
      this.serie = serie;

      this.movieService.getRelatedSeries(serie.id)
        .subscribe( related => {
          this.related = related.results.slice(0,6)
        })

    })

  }

}
