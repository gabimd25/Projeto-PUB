import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventPub } from 'src/app/interfaces/EventPub';
import { EventPubService } from 'src/app/services/event.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  newEvent?: EventPub;
  btnText = 'Adicionar';

  constructor(private eventPubService: EventPubService,
    private MessageService: MessagesService,
    private router: Router) {}

  ngOnInit(): void {
    
  }
  async createHandler(eventPub: EventPub){


    //console.log(eventPub.dataInicio.toLocaleDateString('pt-BR')); // 09/02/2021
    //console.log(eventPub.dataFim.toLocaleDateString('pt-BR')); // 09/02/2021

    await this.eventPubService.createEventPub(eventPub).subscribe();

    this.MessageService.add('drink adicionado com sucesso!');

    this.router.navigate(['/events']);
  }
}
