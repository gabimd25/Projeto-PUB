import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Output() onSubmit = new EventEmitter<Employee>()
  @Input() btnText!: string
  @Input() EmployeeData: Employee | null = null;
  EmployeeForm!: FormGroup;
  
  constructor(){}

  ngOnInit(): void {
    this.EmployeeForm = new FormGroup({
      _id: new FormControl(this.EmployeeData ? this.EmployeeData._id : ''),
      nome: new FormControl(this.EmployeeData ? this.EmployeeData.nome : '', [Validators.required]),
      foto: new FormControl(this.EmployeeData ? this.EmployeeData.foto : '', [Validators.required]),
      idade: new FormControl(this.EmployeeData ? this.EmployeeData.idade : '', [Validators.required]),
      anoAdmissao: new FormControl(this.EmployeeData ? this.EmployeeData.anoAdmissao : '', [Validators.required]),
      cargo: new FormControl(this.EmployeeData ? this.EmployeeData.cargo : '', [Validators.required]),
      naturalidade: new FormControl(this.EmployeeData ? this.EmployeeData.naturalidade : '', [Validators.required]),
      hobbie: new FormControl(this.EmployeeData ? this.EmployeeData.hobbie : '', [Validators.required]),
    });
  }

  get nome(){
    return this.EmployeeForm.get('nome')!;
  }
  get idade(){
    return this.EmployeeForm.get('idade')!;
  }
  get anoAdmissao(){
    return this.EmployeeForm.get('anoAdmissao')!;
  }
  get cargo(){
    return this.EmployeeForm.get('cargo')!;
  }
  get naturalidade(){
    return this.EmployeeForm.get('naturalidade')!;
  }
  get hobbie(){
    return this.EmployeeForm.get('hobbie')!;
  }
  /*get foto(){
    return this.EmployeeForm.get('foto')!;
  }*/
  
  onFileSelected(event: any){
    const file: File = event.target.files[0];
    //console.log("FOTO");
    //console.log(file);
    this.EmployeeForm.patchValue({foto : file});
  }
  submit(){

    if (this.EmployeeForm.invalid){
      return;
    }
    console.log(this.EmployeeForm.value);
    this.onSubmit.emit(this.EmployeeForm.value)
  }
}
