import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/interfaces/Supplier';
import { MessagesService } from 'src/app/services/messages.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent {
  newSupplier?: Supplier;
  btnText = 'Adicionar';

  constructor(private supplierService: SupplierService,
    private MessageService: MessagesService,
    private router: Router) {}

  ngOnInit(): void {
    
  }
  async createHandler(supplier: Supplier){


    //console.log(supplierPub.dataInicio.toLocaleDateString('pt-BR')); // 09/02/2021
    //console.log(supplierPub.dataFim.toLocaleDateString('pt-BR')); // 09/02/2021

    await this.supplierService.createSupplier(supplier).subscribe();

    this.MessageService.add('drink adicionado com sucesso!');

    this.router.navigate(['/suppliers']);
  }
}
