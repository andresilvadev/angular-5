import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomecompleto = 'André Luiz da Silva';
  aniversario = '28/07/1984';
  nome: String = '';
  apelido: String = 'Elyunterim';
  idade: number;
  mensagem: String = '';
  texto: String = '';
  conteudo: String = '';
  referencia: String = '';
  veiculoCadastrado = false;
  marcaCadastrada = false;
  nomeveiculo: String = '';
  marcaveiculo: String = '';
  funcionarios = [];
  vendedores = [];
  apelidos = [];
  adicionado = false;
  nomeFuncionario: String = '';
  ultimoId = 0;

  getIdade() {
    return this.idade;
  }

  adicionar() {
    console.log(`Adicionado ${this.nomeFuncionario}`);
    this.adicionado = true;
    this.ultimoId ++;
    this.funcionarios.push({
      id: ++this.ultimoId,
      nomeFuncionario : this.nomeFuncionario
    });
  }

  adicionarInterpolacao() {
    // console.log(`Adicionando ${this.nome}`);

    /** Função que ternona número aleatório */
    const numero = Math.round(Math.random() * 100);
    this.nome = 'André Silva ';
    this.idade = numero;
  }

  alterarMensagem(event: any) {
    // console.log(`Adicionando ${this.mensagem}`);
    this.mensagem = event.target.value;
  }

  adicionarMensagemDefault() {
    this.mensagem = 'Angular 4 é o melhor';
  }

  adicionarTexto(texto: any) {
    console.log(texto.value);
    this.texto = texto.value;
  }

  habilitarConteudo(event: any) {
    this.conteudo = event.target.value;
  }

  alertConteudo(conteudo: any) {
    alert(this.conteudo = conteudo.value);
  }

  adicionarReferencia() {
    console.log(`Adicionando ${this.referencia}`);
  }

  salvarVeiculo() {
    console.log(`Adicionando ${this.nomeveiculo}`);
    this.veiculoCadastrado = true;
  }

  salvarMarca() {
    console.log(`Adicionando ${this.marcaveiculo}`);
    this.marcaCadastrada = true;
  }

  aoAdicionar(vendedor) {
    this.vendedores.push(vendedor);
  }

}
