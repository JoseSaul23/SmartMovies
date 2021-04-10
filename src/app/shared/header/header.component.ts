import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieService } from 'src/app/movie/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  debouncer: Subject<string> = new Subject();
  query: string = '';

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    this.router.navigateByUrl(`/search/${this.query}`);
  }

}
