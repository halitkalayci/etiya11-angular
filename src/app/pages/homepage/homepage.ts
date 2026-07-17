import { Component, OnInit, signal } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit{
  // Backendden yükle.
  todos = signal<Todo[]>([]);

  constructor(private httpClient: HttpClient) {
    // this.fetchTodos(); -> CTOR İÇİNDE olmaz.
  }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    // Async işlem = zamanı belli olmayan cevap
    // Sana bi söz => Başarılı ya da başarısız bir cevap kesin gelecek.
    this.httpClient.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
                   .subscribe({
                      next:(value: Todo[]) => {
                        console.log("Cevap başarılı", value)
                        this.todos.set(value);
                      }, // Başarılı cevap
                      error: (err: any) => {console.log("Cevap hatalı", err)}, //Hatalı cevap
                      complete: () => {console.log("Complete çalıştı.")}, // Hatalı-hatasız cevap sonrası çalışacak alan.
                   })
  }
}
