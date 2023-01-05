import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Drink } from '../interfaces/Drink';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}bebidas`;

  constructor(private http: HttpClient) { }

  getDrinks(): Observable<Drink[]>{
    return this.http.get<Drink[]>(this.apiUrl);
  }

  getDrink(id: string): Observable<Drink>{
    const url = `${this.apiUrl}/${id}`;
    const result = this.http.get<Drink>(url);
    return result;
  }

  createDrink(drink : Drink): Observable<FormData>{
    //console.log(stringFoto);
    return this.http.post<FormData>(this.apiUrl, { nome: drink.nome , preco: drink.preco
      , descricao: drink.descricao, foto: drink.foto.toString(), isActive: drink.isActive
      , dataCriacao: drink.dataCriacao, dataAtualizacao: drink.dataAtualizacao});
  }

  removeDrink(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateDrink(id: string, drink: Drink): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, { nome: drink.nome , preco: drink.preco
      , descricao: drink.descricao, foto: drink.foto.toString(), isActive: drink.isActive
      , dataAtualizacao: drink.dataAtualizacao});
  }

}
