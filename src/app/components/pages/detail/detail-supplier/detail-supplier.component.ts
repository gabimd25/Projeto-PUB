import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/interfaces/Supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.css']
})
export class DetailSupplierComponent {
  supplier?: Supplier;
  //faTimes = faTimes;
  //faEdit = faEdit;

  constructor(private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router : Router){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id){
      this.supplierService.getSupplier(id).subscribe((item => (this.supplier = item)));      
    }
      
  }
}
