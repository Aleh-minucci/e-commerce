import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FavoritosService {
    favoritos = signal<string[]>([]);

    adicionarFavoritos(produto: string) {
    this.favoritos.update(listaAtual => {
        if (listaAtual.includes(produto)) {
            return listaAtual;
        }
        return [...listaAtual, produto];
    });
    }

    removerFavoritos(produto: string) {
        this.favoritos.update(listaAtual =>
            listaAtual.filter(item => item ! == produto)
        );
    }
}