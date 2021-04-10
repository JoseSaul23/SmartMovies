import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styles: [
  ]
})
export class SeriesComponent implements OnInit {

  series: any[] = [];
  img: string = "https://www.themoviedb.org/t/p/w220_and_h330_face/"

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this.movieService.getPopularSeries()
      .subscribe( res => { 
        this.series = res.results;
      })
  }

}
