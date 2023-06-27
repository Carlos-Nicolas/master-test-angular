import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrlPokemon: string = 'https://pokeapi.co/api/v2/';
  constructor(public http: HttpClient) {}
  pokemons: IPokemon[] = [];
  getAllPokemons(
    limit: number = 20,
    offset: number = 0
  ): Observable<IPokemon[]> {
    return this.http
      .get<IPokemon[]>(
        this.baseUrlPokemon + 'pokemon?offset=' + offset + '&&limit=' + limit
      )
      .pipe(map((x: any) => x.results));
  }
}
