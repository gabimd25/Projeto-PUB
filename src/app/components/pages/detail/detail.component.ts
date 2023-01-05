import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { Drink } from 'src/app/interfaces/Drink';
import { DrinkService } from 'src/app/services/drink.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  drink?: Drink;
  drink2?: Drink;
  //faTimes = faTimes;
  //faEdit = faEdit;

  constructor(private drinkService: DrinkService,
    private route: ActivatedRoute,
    private router : Router){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    console.log( "TESTE0");
    if(id){
      this.drinkService.getDrink(id).subscribe((item => (this.drink = item)));      
      console.log(this.drink?.nome);
      console.log( "TESTE2");
    }
      
  
      
  }
}
