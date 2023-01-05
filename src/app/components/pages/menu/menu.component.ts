import { Component, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { Drink } from 'src/app/interfaces/Drink';
import { DrinkService } from 'src/app/services/drink.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  allDrinks: Drink[] = [];
  drink: Drink[] = [];
  baseApiUrl = environment.baseApiUrl


  constructor(private drinkService: DrinkService,
    private messagesService: MessagesService,
    private router : Router,    ){}

  ngOnInit(): void {
     console.log("DRINKS");
     this.drinkService.getDrinks().subscribe((items)=> {
      const data = items;
      this.allDrinks = data;
        //item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
      
     })
  }

  async removeHandler(id:string){
    await this.drinkService.removeDrink(id).subscribe();
    this.messagesService.add("Momento excluido com sucesso");

    this.router.navigate(['/']);
  }
}
