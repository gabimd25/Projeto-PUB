import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/pages/detail/detail.component';
import { EditDrinkComponent } from './components/pages/edit/edit-drink/edit-drink.component';

import { HomeComponent } from './components/pages/home/home.component';
import { NewDrinkComponent } from './components/pages/new/new-drink/new-drink.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'drinks/new', component: NewDrinkComponent},
    {path: 'drinks/edit/:id', component: EditDrinkComponent},
    {path: 'drinks/:id', component: DetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }