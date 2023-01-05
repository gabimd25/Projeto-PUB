import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/interfaces/Food';
import { FoodService } from 'src/app/services/food.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent {
  food!: Food;
  btnText: string = 'Editar';

  constructor(private foodService: FoodService,
     private route: ActivatedRoute,
     private messagesService: MessagesService,
     private router:Router){}
     
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if(id){
      this.foodService.getFood(id).subscribe(item => {
        this.food = item;
      })
    }
    
  }

  async editHandler(foodData: Food){
    const id = this.food._id;
    console.log("NOME");
    console.log(foodData.nome);
    const formData = new FormData();

    formData.append('nome', foodData.nome);
    formData.append('descricao', foodData.descricao);
    formData.append('preco', foodData.preco.toString());
    if(foodData.foto){
      formData.append('foto', foodData.foto);
    }

    await this.foodService.updateFood(id!,foodData).subscribe();

    this.messagesService.add(`Moment ${id} foi atualizado com sucesso!`);
    this.router.navigate(['/']);
  }
}
