import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, MatAnchor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
