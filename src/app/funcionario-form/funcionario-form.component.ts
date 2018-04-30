import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  titulo = 'Binding de eventos customizados com @Output e EventEmitter';
  adicionado: boolean;
  vendedores = [];
  nomeVendedor: String = '';
  ultimoId = 0;

  @Output() vendedorAdicionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  adicionarVendedor() {
    this.adicionado = true;

    const vendedor = {
      id: ++this.ultimoId,
      nomeVendedor: this.nomeVendedor
    };

    this.vendedorAdicionado.emit(vendedor);
  }


}
