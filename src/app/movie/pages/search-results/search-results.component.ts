import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styles: [
  ]
})
export class SearchResultsComponent implements OnInit {

  results: any[] = [];
  loading: boolean = true;
  img: string = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  constructor(
      private movieService: MovieService,
      private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.loading = true;

    this.activatedRoute.params
    .pipe(
      switchMap( ({query}) => 
        this.movieService.getResults(query) 
      )
    )
    .subscribe( (res: any) => {
      this.results = res.results;
      this.loading = false;
    })

  }

}
