import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private baseUrl = 'http://localhost:8080/projet/api/n2/commentaire';

  constructor(private http: HttpClient) { }


  createCommentaire(commentaire: Object, id: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, commentaire);
  }
  getAllCommentairesByVoiture(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
