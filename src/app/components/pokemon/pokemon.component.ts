import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  public pokemons: IPokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((res) => {
      this.pokemons = res;
    });
  }
}
