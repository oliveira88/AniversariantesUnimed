import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aniversarios',
  templateUrl: './aniversarios.page.html',
  styleUrls: ['./aniversarios.page.scss'],
})
export class AniversariosPage implements OnInit {
  aniversariantes = ["José da Silva Teixeira",
    "Luiz Carlos Garcia",
    "Maria Aparecida Vieira Couto",
    "Roberto Almeida Spoletti",
    "Ana Maria Cerqueira",
    "Pedro Arthur Nogueira Rispinni",
    "Francine Fonseca Pedrini",
    "João da Silva Silvoso",
    "Felipe Barbosa",
    "Savio Vasconcelos"];

  isFontBold = true;
  font: string;
  constructor() { }

  ngOnInit() {
  }

  sair() {
    navigator['app-aniversarios'].exitApp();
  }

}
