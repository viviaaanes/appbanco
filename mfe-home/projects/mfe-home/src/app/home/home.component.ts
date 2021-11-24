import { AutenticacaoService } from './../autenticacao/autenticacao.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('loginForm', {static: true})formLogin!: NgForm;
  cpf = '';


  constructor(private authService: AutenticacaoService, private router: Router) {}

  ngOnInit(): void {
  }

  login() {
    const consultaCpf = this.formLogin.value.cpf
    console.log(consultaCpf);
    this.authService.autenticar(consultaCpf).subscribe((cliente) => {
      const doc: any = cliente.cliente
      if (doc) {
        this.router.navigate(['infos'], { queryParams: { cpf: consultaCpf, doctrue: true }});
      }else {
        this.router.navigate(['infos'], { queryParams: { cpf: consultaCpf  }});
      }
      console.log('Autenticado com sucesso');
      console.log(cliente);

      },

      (error) => {
        alert('CPF inválido');
        console.log(error);
      }
    );
  }
}
