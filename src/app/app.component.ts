import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading: boolean = false;
  pokemonName: string = '';
  pokemonNumber: string = '';
  pokemonImage: string = '';

  ngOnInit(): void {
    this.searchPokemon();
  }

  searchPokemon(): void {
    this.isLoading = false;
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.getRandomInt())
      .then((response) => response.json())
      .then((data) => {
        this.isLoading = false;
        this.pokemonName = data.name;
        this.pokemonNumber = data.id;
        this.pokemonImage =
          data.sprites.other['official-artwork'].front_default;
      });
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * 1000);
  }
}
