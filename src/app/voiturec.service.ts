import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoiturecService {
  private baseUrl = 'http://localhost:8080/projet/api/v1/voituresc';

  constructor(private http: HttpClient) { }

  getVoituresList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
