import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {
  btnText = 'Adicionar';

  constructor(private employeeService: EmployeeService,
    private MessageService: MessagesService,
    private router: Router) {}

  ngOnInit(): void {
    
  }
  async createHandler(employee: Employee){
    
    await this.employeeService.createEmployee(employee).subscribe();

    this.MessageService.add('employee adicionado com sucesso!');

    this.router.navigate(['/']);
  }
}
