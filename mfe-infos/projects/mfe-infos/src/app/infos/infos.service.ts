import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDados } from './cliente-dados.model';

@Injectable({
  providedIn: 'root'
})
export class InfosService {

  constructor(private httpClient: HttpClient) {
  }
  pegarDados(cpf: string) {
    return this.httpClient.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF', {
      cpf
    })
  }

  enviarDados(clienteDados: ClienteDados ){
    return this.httpClient.post('http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes',
      clienteDados
    )
  }
}


