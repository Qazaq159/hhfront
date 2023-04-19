import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./app/home-page/home-page.component";
import {CompanyVacanciesComponent} from "./app/company-vacancies/company-vacancies.component";


const routes: Routes = [
  { path: 'companies', component: HomePageComponent },
  { path: 'companies/:id', component: CompanyVacanciesComponent},
  { path: '', redirectTo: '/companies', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
