import { Injectable } from '@angular/core';
import AsyncServicesInterfaces from '../Interfaces/AsyncServices';
import AsyncServicesInterface from '../Interfaces/AsyncServices';
import { TelaCarregamentoService } from '../tela-carregamento-service/tela-carregamento.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Cotacao from 'src/app/Models/Cotacao';

@Injectable({
  providedIn: 'root'
})
export class FormTesteService implements AsyncServicesInterface {

  constructor(private http:HttpClient, private telaCarregamentoService:TelaCarregamentoService) { }

  private baseUrl:string = 'https://economia.awesomeapi.com.br/json/last'

  mostrarTelaCarregamento(): void{
      this.telaCarregamentoService.gerarTelaCarregamento();
  } 

  ocultarTelaCarregamento(): void {
    this.telaCarregamentoService.limparTelaCarregamento()
  }

  buscarCotacao(consulta:string):Observable<Cotacao> {
    const url = this.baseUrl + `/${consulta}`
    return this.http.get<Cotacao>(url);
  }




}
