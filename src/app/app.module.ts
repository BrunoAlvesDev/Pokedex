import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './shared/components/pokemon/pokemon.component';
import { InputComponent } from './shared/components/input/input.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { SearchButtonComponent } from './shared/components/search-button/search-button.component';
import { AddCommentModalComponent } from './shared/components/add-comment-modal/add-comment-modal.component';
import { TextAreaComponent } from './shared/components/text-area/text-area.component';
import { DetailsModalComponent } from './shared/components/details-modal/details-modal.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PokemonComponent, InputComponent, PaginationComponent, ButtonComponent, SearchButtonComponent, AddCommentModalComponent, TextAreaComponent, DetailsModalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
