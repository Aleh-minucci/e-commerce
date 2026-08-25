import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-favoritos',
  imports: [FormsModule, RouterLink],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  favoritos = signal<string[]>([]);

  novoProduto: string = '';

  adicionarFavorito(): void {
    const produtoFormatado = this.novoProduto.trim();
    if (produtoFormatado) {
      this.favoritos.update(lista => [...lista, produtoFormatado]);
    }
  }

  removerFavoritos(produtoRemover: string): void {
    this.favoritos.update(lista => lista.filter(item => item !== produtoRemover));
  }
}
