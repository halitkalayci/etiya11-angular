import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; // eğer development'ta başlıyorsa angular.json bunu replace edecek.

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    console.log(environment.BASE_API_URL);
    return this.httpClient.get<Todo[]>(`${environment.BASE_API_URL}todos`);
  }
}
