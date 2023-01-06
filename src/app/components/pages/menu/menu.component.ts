import { Component, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { Drink } from 'src/app/interfaces/Drink';
import { Food } from 'src/app/interfaces/Food';
import { DrinkService } from 'src/app/services/drink.service';
import { FoodService } from 'src/app/services/food.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  allDrinks: Drink[] = [];
  allFoods: Food[] = [];
  baseApiUrl = environment.baseApiUrl


  constructor(private drinkService: DrinkService,
    private foodService: FoodService,
    private messagesService: MessagesService,
    private router : Router,    ){}

  ngOnInit(): void {
     this.drinkService.getDrinks().subscribe((items)=> {
      const drink = items;
      this.allDrinks = drink;
        //item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
     })
     this.foodService.getFoods().subscribe((items)=> {
      const food = items;
      this.allFoods = food;
        //item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
     })
  }

  async removeDrinkHandler(id:string){
    await this.drinkService.removeDrink(id).subscribe();
    this.messagesService.add("Momento excluido com sucesso");

    this.router.navigate(['/']);
  }
  async removeFoodHandler(id:string){
    await this.foodService.removeFood(id).subscribe();
    this.messagesService.add("Momento excluido com sucesso");

    this.router.navigate(['/']);
  }

  async detailDrinkHandler(id:string){
    const string = '/drinks/'+id;
    this.router.navigate([string]);
  }
  async detailFoodHandler(id:string){
    const string = '/foods/'+id;
    this.router.navigate([string]);
  }
}
