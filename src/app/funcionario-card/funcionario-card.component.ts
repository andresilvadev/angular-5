import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent implements OnInit {

  titulo = 'Binding de propriedades customizadas com @Input';
  adicionado: boolean;
  clientes = [];
  nomeCliente: String = '';
  lastId = 0;

  @Input ()
  cliente: any;

  constructor() { }

  ngOnInit() {
  }

  adicionarCliente() {
    console.log(`Adicionado ${this.nomeCliente}`);
    this.adicionado = true;
    this.lastId ++;
    this.clientes.push({
      id: ++this.lastId,
      nomeCliente : this.nomeCliente
    });
  }
}
