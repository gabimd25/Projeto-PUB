import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Food } from '../interfaces/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}comidas`;

  constructor(private http: HttpClient) { }

  getFoods(): Observable<Food[]>{
    return this.http.get<Food[]>(this.apiUrl);
  }

  getFood(id: string): Observable<Food>{
    const url = `${this.apiUrl}/${id}`;
    const result = this.http.get<Food>(url);
    return result;
  }

  createFood(food : Food): Observable<FormData>{
    //console.log(stringFoto);
    return this.http.post<FormData>(this.apiUrl, { nome: food.nome , preco: food.preco
      , descricao: food.descricao, foto: food.foto.toString(), isActive: food.isActive
      , dataCriacao: food.dataCriacao, dataAtualizacao: food.dataAtualizacao});
  }

  removeFood(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateFood(id: string, food: Food): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, { nome: food.nome , preco: food.preco
      , descricao: food.descricao, foto: food.foto.toString(), isActive: food.isActive
      , dataAtualizacao: food.dataAtualizacao});
  }
}
