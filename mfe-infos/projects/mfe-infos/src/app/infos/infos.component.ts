import { ClienteDados } from './cliente-dados.model';
import { Dadoscliente } from './../../../../../../mfe-home/projects/mfe-home/src/app/home/dadoscliente';
import { InfosService } from './infos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
})
export class InfosComponent implements OnInit {
  formCadastro: FormGroup;

  cpfCliente: string = '';
  dadosUsuario: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infosService: InfosService
  ) {
    this.formCadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      datanasc: new FormControl('', Validators.required),
      datacadastro: new FormControl('', Validators.required),
      salario: new FormControl('', Validators.required),
      endereco: new FormGroup({
        rua: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        cep: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required),
      }),
    });
  }

  ngOnInit(): void {
    //console.log(this.route);
    this.route.queryParams.subscribe((queryparams: Params) => {
      this.cpfCliente = queryparams['cpf'];
      this.dadosUsuario = queryparams['doctrue'];
      this.reaproveitamentoDeDados(this.cpfCliente, this.dadosUsuario);
    });
  }

  reaproveitamentoDeDados(cpf: string, dadosUsuario: boolean) {
    if (dadosUsuario) {
      this.infosService.pegarDados(cpf).subscribe((dados) => {
        //console.log(dados);
        const dadosCliente: any = dados;
        const dadosCompletos: any = dadosCliente.cliente;
        //console.log(dadosCompletos)
        this.formCadastro.patchValue({
          nome: dadosCompletos.nomeCompleto,
          email: dadosCompletos.email,
          cpf: dadosCompletos.cpf,
          senha: dadosCompletos.senha,
          telefone: dadosCompletos.numeroCelular,
          datanasc: dadosCompletos.dataNascimento,
          datacadastro: dadosCompletos.dataCadastro ,
          endereco:{
            rua: dadosCompletos.endereco.rua,
            numero: dadosCompletos.endereco.numero,
            cep: dadosCompletos.endereco.cep,
            bairro: dadosCompletos.endereco.bairro,
            cidade: dadosCompletos.endereco.cidade,
            estado: dadosCompletos.endereco.estado,
          },
        });
      });
    } else {
      this.formCadastro.patchValue({ cpf: cpf });
    }
  }

  onSubmit() {
    //console.log(this.formCadastro);
    const clienteDados: ClienteDados = {
      nomeCompleto: this.formCadastro.value.nome,
    email: this.formCadastro.value.email,
    cpf: this.formCadastro.value.cpf,
    dataNascimento: this.formCadastro.value.datanasc,
    dataCadastro: this.formCadastro.value.datacadastro,
    salarioMensal: this.formCadastro.value.salario,
    senha: this.formCadastro.value.senha,
    endereco: {
        cep: this.formCadastro.value.endereco.cep,
        rua: this.formCadastro.value.endereco.rua,
        numero: this.formCadastro.value.endereco.numero,
        bairro: this.formCadastro.value.endereco.bairro,
        cidade: this.formCadastro.value.endereco.cidade,
        estado: this.formCadastro.value.endereco.estado,
    },
    numeroCelular: this.formCadastro.value.telefone,
    status: 0
    }
    console.log(clienteDados);
    this.infosService.enviarDados(clienteDados).subscribe( dados => {
      console.log(dados)
      this.router.navigate(['/selfiecliente'], {
        queryParams: {
          cpf: clienteDados.cpf,
          salarioMensal: clienteDados.salarioMensal,
        },
      });
    })

  }

  chamaApi() {}
}
