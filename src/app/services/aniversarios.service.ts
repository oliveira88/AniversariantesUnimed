import { Aniversariante } from './../models/aniversariante';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AniversariosService {

  constructor(private http: HttpClient) { }

  getAniversariantes(): Observable<Aniversariante[]> {
    return this.http.get<Aniversariante[]>('/assets/data/aniversariantes2.json')
  }

}
