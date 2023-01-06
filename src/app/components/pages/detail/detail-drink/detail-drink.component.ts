import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from 'src/app/interfaces/Drink';
import { DrinkService } from 'src/app/services/drink.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-detail-drink',
  templateUrl: './detail-drink.component.html',
  styleUrls: ['./detail-drink.component.css']
})
export class DetailDrinkComponent implements OnInit{
  drink?: Drink;
  //faTimes = faTimes;
  //faEdit = faEdit;

  constructor(private drinkService: DrinkService,
    private route: ActivatedRoute,
    private router : Router){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id){
      this.drinkService.getDrink(id).subscribe((item => (this.drink = item)));      
    }
    
  }
}
