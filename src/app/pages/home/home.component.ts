import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/shared/services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public searchTerm: string = '';
  public pokemonsList: any[] = [];
  public pokemonsShowPage: any[] = [];
  public pageStartIndex: number = 1;
  public showAddCommentModal: boolean = false;
  public showDetailsModal: boolean = false;

  private pokemonsShowPageBackup: any[] = [];

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.loadAllPokemons();
  }

  private loadAllPokemons(): void {
    this.pokeService.getPokemons().subscribe((data: any) => {
      this.pokemonsList = data.results;
      this.populateShowPage();
    });
  }

  public populateShowPage(newPageIndex?: number): void {
    if (newPageIndex) this.pageStartIndex = newPageIndex;
    this.pokemonsShowPage = [];
    for (
      let i = this.pageStartIndex * 10 - 9;
      i <= this.pageStartIndex * 10;
      i++
    ) {
      if (this.pokemonsList[i - 1])
        this.pokemonsShowPage.push(this.pokemonsList[i - 1]);
    }
  }

  public searchPokemon(): void {
    if (this.searchTerm) {
      this.pokemonsShowPageBackup = this.pokemonsShowPage;
      this.pokemonsShowPage = [
        this.pokemonsList.find((pokemon) => pokemon.name == this.searchTerm),
      ];
    } else this.pokemonsShowPage = this.pokemonsShowPageBackup;
  }
}
