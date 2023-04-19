import { Component } from '@angular/core';
import {Company} from "./models";
import {CompaniesComponent} from "./companies/companies.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
  chosenCompany !: Company;

  chooseCompany(company: any){
    this.chosenCompany = company;
  }
}
