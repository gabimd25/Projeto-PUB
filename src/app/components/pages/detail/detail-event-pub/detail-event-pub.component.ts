import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventPub } from 'src/app/interfaces/EventPub';
import { EventPubService } from 'src/app/services/event.service';

@Component({
  selector: 'app-detail-event-pub',
  templateUrl: './detail-event-pub.component.html',
  styleUrls: ['./detail-event-pub.component.css']
})
export class DetailEventPubComponent {
  eventPub?: EventPub;
  //faTimes = faTimes;
  //faEdit = faEdit;

  constructor(private eventpubService: EventPubService,
    private route: ActivatedRoute,
    private router : Router){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id){
      this.eventpubService.getEventPub(id).subscribe((item => (this.eventPub = item)));      
    }
      
  }
}
