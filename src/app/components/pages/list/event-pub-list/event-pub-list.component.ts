import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { EventPub } from 'src/app/interfaces/EventPub';
import { EventPubService } from 'src/app/services/event.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-event-pub-list',
  templateUrl: './event-pub-list.component.html',
  styleUrls: ['./event-pub-list.component.css']
})
export class EventPubListComponent {
  eventsPub: EventPub[] = [];
  baseApiUrl = environment.baseApiUrl


  constructor(private eventpubService: EventPubService,
    private messagesService: MessagesService,
    private router : Router,    ){}

  ngOnInit(): void {
     this.eventpubService.getEventsPub().subscribe((items)=> {
      const eventpub = items;
      this.eventsPub = eventpub;
        //item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
     })
  }

  async removeEventPubHandler(id:string){
    await this.eventpubService.removeEventPub(id).subscribe();
    this.messagesService.add("Momento excluido com sucesso");

    this.router.navigate(['/']);
  }

  async detailEventPubHandler(id:string){
    const string = '/eventpubs/'+id;
    this.router.navigate([string]);
  }
}
