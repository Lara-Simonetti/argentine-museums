import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Museum } from './museum';
import { ApiResults } from './apiResults';

@Injectable({ providedIn: 'root'})

export class MuseumService {

constructor(private http: HttpClient) { }

getMuseums(): Observable<ApiResults> {
  return this.http.get<ApiResults>(environment.baseUrl);
}

getMuseum(id: string): Observable<Museum> {
  return this.http.get<Museum>(environment.baseUrl + "/" + id);
}

}
