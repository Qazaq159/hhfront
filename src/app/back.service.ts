import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://127.0.0.1:8000/api/companies/');
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${id}/vacancies/`)
  }
}
