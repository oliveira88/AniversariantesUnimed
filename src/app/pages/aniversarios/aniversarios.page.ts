import { Aniversariante } from './../../models/aniversariante';
import { AniversariosService } from './../../services/aniversarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aniversarios',
  templateUrl: './aniversarios.page.html',
  styleUrls: ['./aniversarios.page.scss'],
})
export class AniversariosPage implements OnInit {
  aniversariantes: Array<Aniversariante> = [];
  aniversariantesData = [];

  mes = new Date(2017, 10, 1);
  nomeAniversariante = '';
  atualMes;

  mesesDisponiveis = [];
  diasDisponiveis = [];

  constructor(private aniversarianteService: AniversariosService) { }

  ngOnInit() {
    this.getAniversariantes().then(x => {
      var j = 0;
      for (var i = 0; i < this.aniversariantes.length; i++) {
        // let num = this.aniversariantes[i].dataAniversario.toString().substr(5, 2);
        var data = new Date(this.aniversariantes[i].dataAniversario);
        // var atribuir = data.toUTCString().substr(8, 3);


        var mes = data.getUTCMonth().toString();
        var dia = data.getUTCDate();
        console.log(this.aniversariantes[i].dataAniversario);

        if (i == 0) {
          this.mesesDisponiveis[j] = mes;
          this.diasDisponiveis[j] = dia;

          j++;
        } else {
          if (mes != this.mesesDisponiveis[j - 1]) {
            this.mesesDisponiveis[j] = mes;
            this.diasDisponiveis[j] = dia;
            j++;
          } else {
            if (dia != this.diasDisponiveis[j - 1]) {
              this.diasDisponiveis[j] = dia;
              this.mesesDisponiveis[j] = mes;
              j++;
            }
          }
        }

      }
      this.preechendorDeAniversariantesData();

    });
    this.atualMes = this.mes.getMonth();
  }

  dataChanged($event) {
    this.mes = $event.detail.value;
    var data = new Date(this.mes);
    this.atualMes = data.getUTCMonth();
  }
  async getAniversariantes() {
    this.aniversariantes = await this.aniversarianteService.getAniversariantes().toPromise();
  }

  searchAniversariante(aniversariante: string) {
    return aniversariante.toLowerCase().indexOf(this.nomeAniversariante.toLowerCase()) != -1;
  }

  returnType(n) {
    console.log(typeof (n));
  }

  preechendorDeAniversariantesData() {
    for (var i = 0; i < this.aniversariantes.length; i++) {
      this.aniversariantesData[i] = new Date(this.aniversariantes[i].dataAniversario).getUTCMonth();
    }
  }
}
