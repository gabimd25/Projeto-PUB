import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/interfaces/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent {
  food?: Food;
  //faTimes = faTimes;
  //faEdit = faEdit;

  constructor(private foodService: FoodService,
    private route: ActivatedRoute,
    private router : Router){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id){
      this.foodService.getFood(id).subscribe((item => (this.food = item)));      
    }
      
  }
}
