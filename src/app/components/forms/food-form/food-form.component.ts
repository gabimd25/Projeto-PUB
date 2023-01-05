import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Food } from 'src/app/interfaces/Food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Food>()
  @Input() btnText!: string
  @Input() FoodData: Food | null = null;
  FoodForm!: FormGroup;
  
  constructor(){}

  ngOnInit(): void {
    this.FoodForm = new FormGroup({
      _id: new FormControl(this.FoodData ? this.FoodData._id : ''),
      nome: new FormControl(this.FoodData ? this.FoodData.nome : '', [Validators.required]),
      foto: new FormControl(this.FoodData ? this.FoodData.foto : '', [Validators.required]),
      descricao: new FormControl(this.FoodData ? this.FoodData.descricao : '', [Validators.required]),
      preco: new FormControl(this.FoodData ? this.FoodData.preco : '', [Validators.required]),
      //isActive: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataAtualizacao: new FormControl(''),
    });
  }

  get nome(){
    return this.FoodForm.get('nome')!;
  }
  get preco(){
    return this.FoodForm.get('preco')!;
  }
  get descricao(){
    return this.FoodForm.get('descricao')!;
  }
  /*get foto(){
    return this.FoodForm.get('foto')!;
  }*/
  
  onFileSelected(event: any){
    const file: File = event.target.files[0];
    //console.log("FOTO");
    //console.log(file);
    this.FoodForm.patchValue({foto : file});
  }
  submit(){

    if (this.FoodForm.invalid){
      return;
    }
    this.onSubmit.emit(this.FoodForm.value)
  }
}
