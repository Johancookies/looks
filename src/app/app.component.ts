import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemonName: string = 'Pokemon';
  pokemonNumber: string = '69';
  pokemonImage: string = '';

  searchPokemon() {
    this.pokemonName = 'Glaceon';
    this.pokemonNumber = '471';
    this.pokemonImage =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png';
  }
}
