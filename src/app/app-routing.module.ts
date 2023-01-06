import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { DetailDrinkComponent } from './components/pages/detail/detail-drink/detail-drink.component';
import { DetailEventPubComponent } from './components/pages/detail/detail-event-pub/detail-event-pub.component';
import { DetailFoodComponent } from './components/pages/detail/detail-food/detail-food.component';
import { DetailSupplierComponent } from './components/pages/detail/detail-supplier/detail-supplier.component';
import { EditDrinkComponent } from './components/pages/edit/edit-drink/edit-drink.component';
import { EditEmployeeComponent } from './components/pages/edit/edit-employee/edit-employee.component';
import { EditFoodComponent } from './components/pages/edit/edit-food/edit-food.component';
import { EditSupplierComponent } from './components/pages/edit/edit-supplier/edit-supplier.component';

import { HomeComponent } from './components/pages/home/home.component';
import { EmployeeListComponent } from './components/pages/list/employee-list/employee-list.component';
import { EventPubListComponent } from './components/pages/list/event-pub-list/event-pub-list.component';
import { SupplierListComponent } from './components/pages/list/supplier-list/supplier-list.component';
import { NewDrinkComponent } from './components/pages/new/new-drink/new-drink.component';
import { NewEmployeeComponent } from './components/pages/new/new-employee/new-employee.component';
import { NewEventComponent } from './components/pages/new/new-event/new-event.component';
import { NewFoodComponent } from './components/pages/new/new-food/new-food.component';
import { NewSupplierComponent } from './components/pages/new/new-supplier/new-supplier.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'drinks/new', component: NewDrinkComponent},
    {path: 'drinks/edit/:id', component: EditDrinkComponent},
    {path: 'drinks/:id', component: DetailDrinkComponent},
    {path: 'foods/new', component: NewFoodComponent},
    {path: 'foods/edit/:id', component: EditFoodComponent},
    {path: 'foods/:id', component: DetailFoodComponent},
    {path: 'events', component: EventPubListComponent},
    {path: 'events/new', component: NewEventComponent},
    //{path: 'events/edit/:id', component: EditFoodComponent},
    {path: 'suppliers', component: SupplierListComponent},
    {path: 'suppliers/:id', component: DetailSupplierComponent},
    {path: 'suppliers/new', component: NewSupplierComponent},
    {path: 'suppliers/edit/:id', component: EditSupplierComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'employees/new', component: NewEmployeeComponent},
    {path: 'employees/edit/:id', component: EditEmployeeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }