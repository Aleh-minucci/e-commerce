import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';//remove importação do RouterOutlet por enquanto
import { Produto } from './components/produto/produto'; //Importa o componente produto

@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
