import { Component } from '@angular/core';
import { TelaCarregamentoService } from './services/tela-carregamento-service/tela-carregamento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-tela-carregamento';
  
  constructor(public telaCarregamentoService: TelaCarregamentoService) { }

  

}
