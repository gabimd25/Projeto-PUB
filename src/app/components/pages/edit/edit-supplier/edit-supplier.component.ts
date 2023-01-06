import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Supplier } from 'src/app/interfaces/Supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent {
  supplier!: Supplier;
  btnText: string = 'Editar';

  constructor(private supplierService: SupplierService,
     private route: ActivatedRoute,
     private messagesService: MessagesService,
     private router:Router){}
     
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if(id){
      this.supplierService.getSupplier(id).subscribe(item => {
        this.supplier = item;
      })
    }
    
  }

  async editHandler(supplierData: Supplier){
    const id = this.supplier._id;
    const formData = new FormData();

    formData.append('nome', supplierData.nome);
    formData.append('descricao', supplierData.descricao);
    if(supplierData.foto){
      formData.append('foto', supplierData.foto);
    }

    await this.supplierService.updateSupplier(id!,supplierData).subscribe();

    this.messagesService.add(`Moment ${id} foi atualizado com sucesso!`);
    this.router.navigate(['/']);
  }
}
