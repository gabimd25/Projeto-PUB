import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}funcionarios`;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployee(id: string): Observable<Employee>{
    const url = `${this.apiUrl}/${id}`;
    const result = this.http.get<Employee>(url);
    return result;
  }
  createEmployee(employee : Employee): Observable<FormData>{
    //console.log(stringFoto);
    return this.http.post<FormData>(this.apiUrl, { nome: employee.nome
      , idade: employee.idade, foto: employee.foto.toString(), cargo: employee.cargo
      , naturalidade: employee.naturalidade, anoAdmissao: employee.anoAdmissao
      , hobbie: employee.hobbie, isActive: employee.isActive
      , dataCriacao: employee.dataCriacao, dataAtualizacao: employee.dataAtualizacao});
  }

  removeEmployee(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateEmployee(id: string, employee: Employee): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, { nome: employee.nome
      , idade: employee.idade, foto: employee.foto.toString(), cargo: employee.cargo
      , naturalidade: employee.naturalidade, anoAdmissao: employee.anoAdmissao
      , hobbie: employee.hobbie, isActive: employee.isActive
      , dataCriacao: employee.dataCriacao, dataAtualizacao: employee.dataAtualizacao});
  }
}
