import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private pokeApi: string = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {}

  public getPokemons(): Observable<any> {
    return this.httpClient.get<any>(`${this.pokeApi}/pokemon?limit=1281`).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((pokemon: any) => {
          this.apiGetPokemons(pokemon.url).subscribe((resData) => {
            pokemon.id = resData.id;
            pokemon.favorite = false;
            pokemon.comments = [];
          });
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(map((res) => res));
  }
}
