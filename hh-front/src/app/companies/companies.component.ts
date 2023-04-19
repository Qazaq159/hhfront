import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Company} from "../models";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  @Output() ChosenCompany = new EventEmitter<Company>();

  constructor(private apiService: ApiService) {
    this.companies = []
  }

  ngOnInit() {
    this.apiService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    })
  }

  ShareCompany(company: Company){
    this.ChosenCompany.emit(company);
  }
}
