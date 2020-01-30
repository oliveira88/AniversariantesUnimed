import { Aniversariante } from './../../models/aniversariante';
import { AniversariosService } from './../../services/aniversarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aniversarios',
  templateUrl: './aniversarios.page.html',
  styleUrls: ['./aniversarios.page.scss'],
})
export class AniversariosPage implements OnInit {
  public aniversariantes: Aniversariante[] = [];
  public copiaAniversariantes: Aniversariante[] = [];
  public aniversariantesData = [];
  public mes = new Date(2017, 10, 1);
  public nomeAniversariante = '';
  public atualMes;

  aniversariantesMes = [];
  diasComAniversariantes = [];

  constructor(private aniversarianteService: AniversariosService) { }

  ngOnInit() {
    this.getAniversariantes().then(x => {
      this.fazCopiaDeAniversariantes();
      //this.preechendorDeAniversariantesData();
    });
    this.atualMes = this.mes.getMonth();
  }

  dataChanged($event) {
    this.mes = $event.detail.value;
    var data = new Date(this.mes);
    this.atualMes = data.getUTCMonth();
    this.criarEstruturaDeCards();
  }

  async getAniversariantes() {
    this.aniversariantes = await this.aniversarianteService.getAniversariantes().toPromise();
    this.criarEstruturaDeCards();
  }

  criarEstruturaDeCards() {
    this.aniversariantesMes = this.aniversariantes.filter(aniversariante => {
      let data = new Date(aniversariante.dataAniversario);
      return data.getUTCMonth() == this.atualMes;
    });

    this.diasComAniversariantes = this.criaObjetosDia(this.filtraDiasDoMesComAniversariantes(this.aniversariantesMes));
    console.log(this.diasComAniversariantes);
  }

  private criaObjetosDia(diasComAniversariantes: any) {
    return diasComAniversariantes.map(data => {
      return {
        numero: data,
        aniversariantes: this.aniversariantesMes.filter(aniversariante => {
          let data2 = new Date(aniversariante.dataAniversario).getUTCDate();
          return data == data2;
        })
      };
    });
  }

  private filtraDiasDoMesComAniversariantes(aniversariantesMes) {
    return aniversariantesMes.reduce((array, aniversariante) => {
      // Retornar um array com dias unicos
      let data = new Date(aniversariante.dataAniversario).getUTCDate();
      if (!array.includes(data)) {
        array.push(data);
      }
      return array;
    }, []);
  }

  searchAniversariante(aniversariante: string) {
    return aniversariante.toLowerCase().indexOf(this.nomeAniversariante.toLowerCase()) != -1;
  }

  buscaAniversariante($event) {
    console.log($event.toLowerCase());
    let ani = this.copiaAniversariantes.filter(x => x.nome.toLowerCase().indexOf($event.toLowerCase()) != -1);
    if (this.copiaAniversariantes.filter(x => x.nome.toLowerCase().indexOf($event.toLowerCase()) != -1)) {
      this.aniversariantes = ani;
      this.criarEstruturaDeCards();
    }

  }
  fazCopiaDeAniversariantes() {
    this.copiaAniversariantes = this.aniversariantes.map(aniversariante => aniversariante)
    console.log(this.copiaAniversariantes);
  }
}
