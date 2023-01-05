import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Drink } from 'src/app/interfaces/Drink';
import { DrinkService } from 'src/app/services/drink.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-drink',
  templateUrl: './new-drink.component.html',
  styleUrls: ['./new-drink.component.css']
})
export class NewDrinkComponent {

  btnText = 'Adicionar';

  constructor(private drinkService: DrinkService,
    private MessageService: MessagesService,
    private router: Router) {}

  ngOnInit(): void {
    
  }
  async createHandler(drink: Drink){
    
    await this.drinkService.createDrink(drink).subscribe();

    this.MessageService.add('drink adicionado com sucesso!');

    this.router.navigate(['/']);
  }
}