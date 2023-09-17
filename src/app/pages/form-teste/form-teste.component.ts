import { Component } from '@angular/core';
import Cotacao from 'src/app/Models/Cotacao';
import { FormTesteService } from 'src/app/services/form-teste-service/form-teste.service';


@Component({
  selector: 'app-form-teste',
  templateUrl: './form-teste.component.html',
  styleUrls: ['./form-teste.component.css']
})
export class FormTesteComponent {

  constructor(private formTestService:FormTesteService) {}

  consulta?:string;
  cotacao!:Cotacao;


   async obterCotacao() {
    console.log(this.consulta);
    
    this.formTestService.mostrarTelaCarregamento();
    const observer = this.formTestService.buscarCotacao(this.consulta!);
    await observer.subscribe(
      {
         next: (res) => {
          this.cotacao = res;
          console.log(this.cotacao);
          
          this.formTestService.ocultarTelaCarregamento()
        },
        error: () => {
          this.formTestService.ocultarTelaCarregamento()
        }
      }

    )

    
    
    
  }

}
