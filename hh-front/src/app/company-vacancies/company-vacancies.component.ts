import {Component, Input, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";
import {CompaniesComponent} from "../companies/companies.component";

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {
  vacancies: Vacancy[];
  company!: Company;
  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {
    this.vacancies = []
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id){
        let id = +_id;
        this.apiService.getCompanyVacancies(id).subscribe((vacancies) => {
          this.vacancies = vacancies;
        });
      }
    });

    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id){
        let id = +_id;
        this.apiService.getCompany(id).subscribe((company) => {
        this.company = company;
      });
      }
    })

  }


}
