import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { Login } from 'src/app/interfaces/Login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() onSubmit = new EventEmitter<Login>()
  btnText: string = "Login";
  @Input() LoginData: Login | null = null;
  LoginForm!: FormGroup;
  
  constructor(private router: Router){}
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl(this.LoginData ? this.LoginData.email : '', [Validators.required]),
      senha: new FormControl(this.LoginData ? this.LoginData.senha : '', [Validators.required]),
    });
  }

  get email(){
    return this.LoginForm.get('email')!;
  }
  get senha(){
    return this.LoginForm.get('senha')!;
  }

  submit(){

    if (this.LoginForm.invalid){
      return;
    }
    this.onSubmit.emit(this.LoginForm.value)
    console.log("login efetuado");
    
    this.router.navigate(['/home']);
  }
}
