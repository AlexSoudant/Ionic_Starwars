import { Injectable } from '@angular/core';
import 'rxjs/';
import { Observable } from 'rxjs/Observable';
import { Film } from './../../interfaces/film.interface';
import { SwapiProvider} from '../swapi/swapi';


@Injectable()
export class FilmProvider {

  constructor(private Swapi: SwapiProvider) { }

  getFilmById(id: String): Observable<Film> {
    return this.Swapi.getFilmById(id);
  }

  getFilmsById(ids: Array<String>): Observable<Array<Film>> {
    const films: Array<Observable<Film>> = ids.map(id => this.getFilmById(id));
    return Observable.forkJoin(films);
  }

}
