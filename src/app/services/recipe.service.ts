import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
// we use json server to contact the httpClient
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes'; // URL del JSON Server

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRecipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
