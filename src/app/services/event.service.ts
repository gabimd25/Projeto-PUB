import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { EventPub } from '../interfaces/EventPub';

@Injectable({
  providedIn: 'root'
})
export class EventPubService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}eventos`;

  constructor(private http: HttpClient) { }

  getEventsPub(): Observable<EventPub[]>{
    return this.http.get<EventPub[]>(this.apiUrl);
  }

  getEventPub(id: string): Observable<EventPub>{
    const url = `${this.apiUrl}/${id}`;
    const result = this.http.get<EventPub>(url);
    return result;
  }

  createEventPub(eventpub : EventPub): Observable<FormData>{
    //console.log(stringFoto);
    return this.http.post<FormData>(this.apiUrl, { nome: eventpub.nome , dataInicio : eventpub.dataInicio
      , dataFim: eventpub.dataFim, horaInicio: eventpub.horaInicio, horaFim: eventpub.horaFim, agendados : eventpub.agendados
      , descricao: eventpub.descricao, foto: eventpub.foto.toString(), isActive: eventpub.isActive
      , dataCriacao: eventpub.dataCriacao, dataAtualizacao: eventpub.dataAtualizacao});
  }

  removeEventPub(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateEventPub(id: string, eventpub: EventPub): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, { nome: eventpub.nome,dataInicio : eventpub.dataInicio
      , dataFim: eventpub.dataFim, horaInicio: eventpub.horaInicio, horaFim: eventpub.horaFim, agendados : eventpub.agendados
      , descricao: eventpub.descricao, foto: eventpub.foto.toString(), isActive: eventpub.isActive
      , dataAtualizacao: eventpub.dataAtualizacao});
  }
}
