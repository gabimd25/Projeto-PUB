import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventPub } from 'src/app/interfaces/EventPub';
import { EventPubService } from 'src/app/services/event.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-event-pub',
  templateUrl: './event-pub.component.html',
  styleUrls: ['./event-pub.component.css']
})
export class EventPubComponent {

  eventsPub: EventPub[] = [];
  eventsFive: EventPub[] = [];

  constructor(private eventPubService: EventPubService,
     private route: ActivatedRoute,
     private messagesService: MessagesService,
     private router:Router){}
     
  ngOnInit(): void {
   
    this.eventPubService.getEventsPub().subscribe((items)=> {
      const events = items;
      this.eventsPub = events;
      this.eventsFive = events.slice(-6);
        //item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
     })
    
  }

  detailEventHandler(id: string){
    const string = '/events/'+id;
    this.router.navigate([string]);
  }
}
