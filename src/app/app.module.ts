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
import { DetailComponent } from './components/pages/detail/detail.component';
import { EditDrinkComponent } from './components/pages/edit/edit-drink/edit-drink.component';
import { FoodFormComponent } from './components/forms/food-form/food-form.component';
import { EditFoodComponent } from './components/pages/edit/edit-food/edit-food.component';


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
    DetailComponent,
    EditDrinkComponent,
    FoodFormComponent,
    EditFoodComponent
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
