import { Injectable } from '@angular/core';
import 'rxjs/';
import { Observable } from 'rxjs/Observable';
import { Film } from './../../interfaces/film.interface';
import { SwapiProvider } from '../swapi/swapi';


@Injectable()
export class FilmProvider {

  private filmsMap = {};

  constructor(private Swapi: SwapiProvider) { }

  getFilmById(id: String): Observable<Film> {
    if (this.filmsMap[id.toString()]) {
      return new Observable(observer => {
        observer.next(this.filmsMap[id.toString()]);
        observer.complete();
      })
    } else {
      let resObs = this.Swapi.getFilmById(id.toString());
      // resObs.subscribe(
      //   ((res) => {
      //     this.filmsMap[id] = res;
      //   }),
      //   ((error) => {
      //     console.log(error);
      //   }),
      //   () => {
      //     console.log('FIN');
      //   }
      // );
      return resObs.map(film => {
        this.filmsMap[id.toString()] = film;
        return film;
      });


    }
  }

  getFilmsById(ids: Array<String>): Observable<Array<Film>> {
    const films: Array<Observable<Film>> = ids.map(id => this.getFilmById(id));
    return Observable.forkJoin(films);
  }

}
