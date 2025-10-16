import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Projetos } from './components/projetos/projetos';
import { Sobre } from './components/sobre/sobre';
import { Rodape } from './components/rodape/rodape';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Cabecalho, 
    Projetos,
    Sobre,
    Rodape 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portifolio-angular');
}
