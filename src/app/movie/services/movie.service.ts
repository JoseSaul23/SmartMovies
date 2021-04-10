import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl: string = 'https://api.themoviedb.org/3'
  private apiKey: string = '2f0ebe6455b19a1766e4424ccd797390';

  constructor(private http: HttpClient) { }

  getTopRatedMovies(): Observable<any>{

    const url: string = `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}&page=1`;
    return this.http.get(url);

  }

  getPopularMovies(): Observable<any>{

    const url: string = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=1`;
    return this.http.get(url);

  }

  getPopularSeries(): Observable<any>{

    const url: string = `${this.apiUrl}/tv/popular?api_key=${this.apiKey}&page=1`;
    return this.http.get(url);

  }

  getPopularActors(): Observable<any>{

    const url: string = `${this.apiUrl}/person/popular?api_key=${this.apiKey}&page=1`;
    return this.http.get(url);

  }

  getMovie(id: number): Observable<any>{

    const url: string = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);

  }

  getRelatedMovies(id: number): Observable<any>{

    const url: string = `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}&page=1`;
    return this.http.get(url);

  }

  getSerie(id: number): Observable<any>{

    const url: string = `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);

  }

  getRelatedSeries(id: number): Observable<any>{

    const url: string = `${this.apiUrl}/tv/${id}/recommendations?api_key=${this.apiKey}&page=1`;
    return this.http.get(url);

  }

  getActor(id: number): Observable<any>{

    const url: string = `${this.apiUrl}/person/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);

  }

  getResults(query: string): Observable<any>{

    const url: string = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get(url);

  }

}
