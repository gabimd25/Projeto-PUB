import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/interfaces/Food';
import { FoodService } from 'src/app/services/food.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent {
  btnText = 'Adicionar';

  constructor(private foodService: FoodService,
    private MessageService: MessagesService,
    private router: Router) {}

  ngOnInit(): void {
    
  }
  async createHandler(food: Food){
    
    await this.foodService.createFood(food).subscribe();

    this.MessageService.add('food adicionado com sucesso!');

    this.router.navigate(['/']);
  }

}
