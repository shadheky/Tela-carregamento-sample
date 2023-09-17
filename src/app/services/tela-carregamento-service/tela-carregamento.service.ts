import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelaCarregamentoService {

  constructor() { }

  private estaCarregando:boolean = false;

  getEstaCarregando() {
    return this.estaCarregando;
  }

  gerarTelaCarregamento() {
    this.estaCarregando = true;
  }

  limparTelaCarregamento() {
    this.estaCarregando = false;
  }

}
