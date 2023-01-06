import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { MessagesService } from 'src/app/services/messages.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employee!: Employee;
  btnText: string = 'Editar';

  constructor(private employeeService: EmployeeService,
     private route: ActivatedRoute,
     private messagesService: MessagesService,
     private router:Router){}
     
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if(id){
      this.employeeService.getEmployee(id).subscribe(item => {
        this.employee = item;
      })
    }
    
  }

  async editHandler(employeeData: Employee){
    const id = this.employee._id;
    const formData = new FormData();

    formData.append('nome', employeeData.nome);
    formData.append('idade', employeeData.idade.toString());
    formData.append('cargo', employeeData.cargo);
    formData.append('naturalidade', employeeData.naturalidade);
    formData.append('anoAdmissao', employeeData.anoAdmissao.toString());
    formData.append('hobbie', employeeData.hobbie);

    if(employeeData.foto){
      formData.append('foto', employeeData.foto);
    }

    await this.employeeService.updateEmployee(id!,employeeData).subscribe();

    this.messagesService.add(`Moment ${id} foi atualizado com sucesso!`);
    this.router.navigate(['/']);
  }
}
