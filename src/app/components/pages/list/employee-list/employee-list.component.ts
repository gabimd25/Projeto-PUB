import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  allEmployees: Employee[] = [];
  baseApiUrl = environment.baseApiUrl


  constructor(private employeeService: EmployeeService,
    private messagesService: MessagesService,
    private router : Router,    ){}

  ngOnInit(): void {
     this.employeeService.getEmployees().subscribe((items)=> {
      const employee = items;
      this.allEmployees = employee;
        //item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
     })
  }

  async removeEmployeeHandler(id:string){
    await this.employeeService.removeEmployee(id).subscribe();
    this.messagesService.add("Momento excluido com sucesso");

    this.router.navigate(['/']);
  }

  async detailEmployeeHandler(id:string){
    const string = '/employees/'+id;
    this.router.navigate([string]);
  }
}
