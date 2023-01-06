import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { Supplier } from 'src/app/interfaces/Supplier';
import { MessagesService } from 'src/app/services/messages.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent {
  suppliers: Supplier[] = [];
  baseApiUrl = environment.baseApiUrl


  constructor(private supplierService: SupplierService,
    private messagesService: MessagesService,
    private router : Router,    ){}

  ngOnInit(): void {
     this.supplierService.getSuppliers().subscribe((items)=> {
      const data = items;
      this.suppliers = data;
        //item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
     })
  }

  async removeSupplierHandler(id:string){
    await this.supplierService.removeSupplier(id).subscribe();
    this.messagesService.add("Fornecedor excluido com sucesso");

    this.router.navigate(['/']);
  }

  async detailSupplierHandler(id:string){
    const string = '/suppliers/'+id;
    this.router.navigate([string]);
  }
}
