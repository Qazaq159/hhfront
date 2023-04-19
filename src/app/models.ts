export interface Company {
  id: number;
  name: string;
  address: string;
  city: string;
  description: string;
}

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: string;
}

