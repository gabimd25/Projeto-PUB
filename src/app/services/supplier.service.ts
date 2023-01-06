import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Supplier } from '../interfaces/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}fornecedores`;

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.apiUrl);
  }

  getSupplier(id: string): Observable<Supplier>{
    const url = `${this.apiUrl}/${id}`;
    const result = this.http.get<Supplier>(url);
    return result;
  }

  createSupplier(supplier : Supplier): Observable<FormData>{
    //console.log(stringFoto);
    return this.http.post<FormData>(this.apiUrl, { nome: supplier.nome
      , descricao: supplier.descricao, foto: supplier.foto.toString(), isActive: supplier.isActive
      , dataCriacao: supplier.dataCriacao, dataAtualizacao: supplier.dataAtualizacao});
  }

  removeSupplier(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateSupplier(id: string, supplier: Supplier): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, { nome: supplier.nome
      , descricao: supplier.descricao, foto: supplier.foto.toString(), isActive: supplier.isActive
      , dataAtualizacao: supplier.dataAtualizacao});
  }
}
