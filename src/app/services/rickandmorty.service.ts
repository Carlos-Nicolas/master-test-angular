import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRickandmorty } from '../interfaces/rickandmorty';

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  constructor(public http: HttpClient) {}

  baseUrlRick: string = 'https://rickandmortyapi.com/api/character';

  getAllCharacters(): Observable<IRickandmorty[]> {
    return this.http
      .get<IRickandmorty[]>(this.baseUrlRick)
      .pipe(map((x: any) => x.results));
  }
}
