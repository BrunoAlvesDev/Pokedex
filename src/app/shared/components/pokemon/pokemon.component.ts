import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  @Input() pokemonData: Pokemon = {};
  @Output() openAddCommentModal = new EventEmitter<string>();
  @Output() openDetailsModal = new EventEmitter<string>();

  public addComment(): void {
    this.openAddCommentModal.emit();
  }

  public showDetails(): void {
    this.openDetailsModal.emit();
  }
}
