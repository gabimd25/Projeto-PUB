import { Component, EventEmitter, Input, ModuleWithComponentFactories, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { EventPub } from 'src/app/interfaces/EventPub';

@Component({
  selector: 'app-event-pub-form',
  templateUrl: './event-pub-form.component.html',
  styleUrls: ['./event-pub-form.component.css']
})
export class EventPubFormComponent {
  @Output() onSubmit = new EventEmitter<EventPub>()
  @Input() btnText!: string
  @Input() EventPubData: EventPub | null = null;
  EventPubForm!: FormGroup;
 // const moment = require(“moment”);
  constructor(){}

  ngOnInit(): void {
    this.EventPubForm = new FormGroup({
      _id: new FormControl(this.EventPubData ? this.EventPubData._id : ''),
      nome: new FormControl(this.EventPubData ? this.EventPubData.nome : '', [Validators.required]),
      foto: new FormControl(this.EventPubData ? this.EventPubData.foto : '', [Validators.required]),
      descricao: new FormControl(this.EventPubData ? this.EventPubData.descricao : '', [Validators.required]),
      dataInicio: new FormControl(this.EventPubData ? this.EventPubData.dataInicio : '', [Validators.required]),
      dataFim: new FormControl(this.EventPubData ? this.EventPubData.dataFim : '', [Validators.required]),
      horaInicio: new FormControl(this.EventPubData ? this.EventPubData.horaInicio : '', [Validators.required]),
      horaFim: new FormControl(this.EventPubData ? this.EventPubData.horaFim : '', [Validators.required]),
    });
  }

  get nome(){
    return this.EventPubForm.get('nome')!;
  }
  get descricao(){
    return this.EventPubForm.get('descricao')!;
  }
  get dataInicio(){
    return this.EventPubForm.get('dataInicio')!;
  }
  get dataFim(){
    return this.EventPubForm.get('dataFim')!;
  }
  get horaInicio(){
    return this.EventPubForm.get('horaInicio')!;
  }
  get horaFim(){
    return this.EventPubForm.get('horaFim')!;
  }
  /*get foto(){
    return this.EventPubForm.get('foto')!;
  }*/
  
  onFileSelected(event: any){
    const file: File = event.target.files[0];
    //console.log("FOTO");
    //console.log(file);
    this.EventPubForm.patchValue({foto : file});
  }
  submit(){

    if (this.EventPubForm.invalid){
      return;
    }
    const dataInicioParsed = moment(this.EventPubForm.value.dataInicio).format('L');
    const dataFimParsed = moment(this.EventPubForm.value.dataFim).format('L');
    this.EventPubForm.value.dataInicio = dataInicioParsed;
    this.EventPubForm.value.dataFim = dataFimParsed;
    this.onSubmit.emit(this.EventPubForm.value)
  }
}
