import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Drink } from 'src/app/interfaces/Drink';

@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.css']
})
export class DrinkFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Drink>()
  @Input() btnText!: string
  @Input() DrinkData: Drink | null = null;
  DrinkForm!: FormGroup;
  
  constructor(){}

  ngOnInit(): void {
    this.DrinkForm = new FormGroup({
      _id: new FormControl(this.DrinkData ? this.DrinkData._id : ''),
      nome: new FormControl(this.DrinkData ? this.DrinkData.nome : '', [Validators.required]),
      foto: new FormControl(this.DrinkData ? this.DrinkData.foto : '', [Validators.required]),
      descricao: new FormControl(this.DrinkData ? this.DrinkData.descricao : '', [Validators.required]),
      preco: new FormControl(this.DrinkData ? this.DrinkData.preco : '', [Validators.required]),
      //isActive: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataAtualizacao: new FormControl(''),
    });
  }

  get nome(){
    return this.DrinkForm.get('nome')!;
  }
  get preco(){
    return this.DrinkForm.get('preco')!;
  }
  get descricao(){
    return this.DrinkForm.get('descricao')!;
  }
  /*get foto(){
    return this.DrinkForm.get('foto')!;
  }*/
  
  onFileSelected(event: any){
    const file: File = event.target.files[0];
    //console.log("FOTO");
    //console.log(file);
    this.DrinkForm.patchValue({foto : file});
  }
  submit(){

    if (this.DrinkForm.invalid){
      return;
    }
    this.onSubmit.emit(this.DrinkForm.value)
  }
}
