import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventPub } from 'src/app/interfaces/EventPub';
import { EventPubService } from 'src/app/services/event.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-event-pub',
  templateUrl: './edit-event-pub.component.html',
  styleUrls: ['./edit-event-pub.component.css']
})
export class EditEventPubComponent {
  eventpub!: EventPub;
  btnText: string = 'Editar';

  constructor(private eventpubService: EventPubService,
     private route: ActivatedRoute,
     private messagesService: MessagesService,
     private router:Router){}
     
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if(id){
      this.eventpubService.getEventPub(id).subscribe(item => {
        this.eventpub = item;
      })
    }
    
  }

  async editHandler(eventpubData: EventPub){
    const id = this.eventpub._id;
    const formData = new FormData();

    formData.append('nome', eventpubData.nome);
    formData.append('descricao', eventpubData.descricao);
    if(eventpubData.foto){
      formData.append('foto', eventpubData.foto);
    }

    await this.eventpubService.updateEventPub(id!,eventpubData).subscribe();

    this.messagesService.add(`Moment ${id} foi atualizado com sucesso!`);
    this.router.navigate(['/']);
  }
}
