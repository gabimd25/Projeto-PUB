import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from 'src/app/interfaces/Drink';
import { DrinkService } from 'src/app/services/drink.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrls: ['./edit-drink.component.css']
})
export class EditDrinkComponent implements OnInit{
  drink!: Drink;
  btnText: string = 'Editar';

  constructor(private drinkService: DrinkService,
     private route: ActivatedRoute,
     private messagesService: MessagesService,
     private router:Router){}
     
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if(id){
      this.drinkService.getDrink(id).subscribe(item => {
        this.drink = item;
      })
    }
    
  }

  async editHandler(drinkData: Drink){
    const id = this.drink._id;
    console.log("NOME");
    console.log(drinkData.nome);
    const formData = new FormData();

    formData.append('nome', drinkData.nome);
    formData.append('descricao', drinkData.descricao);
    formData.append('preco', drinkData.preco.toString());
    if(drinkData.foto){
      formData.append('foto', drinkData.foto);
    }

    await this.drinkService.updateDrink(id!,drinkData).subscribe();

    this.messagesService.add(`Moment ${id} foi atualizado com sucesso!`);
    this.router.navigate(['/']);
  }
}
