import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesComponent } from './components/messages/messages.component';
import { DrinkFormComponent } from './components/forms/drink-form/drink-form.component';
import { NewDrinkComponent } from './components/pages/new/new-drink/new-drink.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { DetailDrinkComponent } from './components/pages/detail/detail-drink/detail-drink.component';
import { EditDrinkComponent } from './components/pages/edit/edit-drink/edit-drink.component';
import { FoodFormComponent } from './components/forms/food-form/food-form.component';
import { EditFoodComponent } from './components/pages/edit/edit-food/edit-food.component';
import { NewFoodComponent } from './components/pages/new/new-food/new-food.component';
import { DetailFoodComponent } from './components/pages/detail/detail-food/detail-food.component';
import { EventPubComponent } from './components/pages/event-pub/event-pub.component';
import { DetailEventPubComponent } from './components/pages/detail/detail-event-pub/detail-event-pub.component';
import { NewEventComponent } from './components/pages/new/new-event/new-event.component';
import { EventPubFormComponent } from './components/forms/event-pub-form/event-pub-form.component';
import { EventPubListComponent } from './components/pages/list/event-pub-list/event-pub-list.component';
import { EditEventPubComponent } from './components/pages/edit/edit-event-pub/edit-event-pub.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { SupplierListComponent } from './components/pages/list/supplier-list/supplier-list.component';
import { SupplierFormComponent } from './components/forms/supplier-form/supplier-form.component';
import { EditSupplierComponent } from './components/pages/edit/edit-supplier/edit-supplier.component';
import { NewSupplierComponent } from './components/pages/new/new-supplier/new-supplier.component';
import { DetailSupplierComponent } from './components/pages/detail/detail-supplier/detail-supplier.component';
import { EmployeeFormComponent } from './components/forms/employee-form/employee-form.component';
import { EditEmployeeComponent } from './components/pages/edit/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './components/pages/list/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/pages/new/new-employee/new-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MessagesComponent,
    DrinkFormComponent,
    NewDrinkComponent,
    MenuComponent,
    DetailDrinkComponent,
    EditDrinkComponent,
    FoodFormComponent,
    EditFoodComponent,
    NewFoodComponent,
    DetailFoodComponent,
    EventPubComponent,
    DetailEventPubComponent,
    NewEventComponent,
    EventPubFormComponent,
    EventPubListComponent,
    EditEventPubComponent,
    LoginFormComponent,
    SupplierListComponent,
    SupplierFormComponent,
    EditSupplierComponent,
    NewSupplierComponent,
    DetailSupplierComponent,
    EmployeeFormComponent,
    EditEmployeeComponent,
    EmployeeListComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
