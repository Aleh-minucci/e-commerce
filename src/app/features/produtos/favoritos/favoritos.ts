import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from "@angular/router";
import { FavoritosService } from '../../../core/services/favoritos.service';
import { get } from 'http';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {

  constructor (
    private FavoritosService: FavoritosService
  ) {}

  get favoritos() {
    return this.FavoritosService.favoritos;
  }

  removerItens(produto: string) {
    this.FavoritosService.removerFavoritos(produto);
  }
}
