import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/interfaces/Supplier';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent {
  @Output() onSubmit = new EventEmitter<Supplier>()
  @Input() btnText!: string
  @Input() SupplierData: Supplier | null = null;
  SupplierForm!: FormGroup;
  
  constructor(){}

  ngOnInit(): void {
    this.SupplierForm = new FormGroup({
      _id: new FormControl(this.SupplierData ? this.SupplierData._id : ''),
      nome: new FormControl(this.SupplierData ? this.SupplierData.nome : '', [Validators.required]),
      foto: new FormControl(this.SupplierData ? this.SupplierData.foto : '', [Validators.required]),
      descricao: new FormControl(this.SupplierData ? this.SupplierData.descricao : '', [Validators.required]),
      
    });
  }

  get nome(){
    return this.SupplierForm.get('nome')!;
  }
  get descricao(){
    return this.SupplierForm.get('descricao')!;
  }
  /*get foto(){
    return this.SupplierForm.get('foto')!;
  }*/
  
  onFileSelected(event: any){
    const file: File = event.target.files[0];
    //console.log("FOTO");
    //console.log(file);
    this.SupplierForm.patchValue({foto : file});
  }
  submit(){

    if (this.SupplierForm.invalid){
      return;
    }
    this.onSubmit.emit(this.SupplierForm.value)
  }
}
