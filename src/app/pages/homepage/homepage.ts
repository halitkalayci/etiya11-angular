import { Component, OnInit, signal } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../../services/todo-service';
import { MessageService } from '../../services/message-service';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit{
  // Backendden yükle.
  todos = signal<Todo[]>([]);

  constructor(private todoService: TodoService, private messageService: MessageService) {
    // this.fetchTodos(); -> CTOR İÇİNDE olmaz.
  }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    // Async işlem = zamanı belli olmayan cevap
    // Sana bi söz => Başarılı ya da başarısız bir cevap kesin gelecek.

    // 50+ sayfa atabilir..
    this.todoService.fetchTodos()
                   .subscribe({
                      next:(value: Todo[]) => {
                        this.todos.set(value);
                        this.messageService.toastSuccessMessage("Todolar çekildi.")
                      }, // Başarılı cevap
                      error: (err: any) => {console.log("Cevap hatalı", err)}, //Hatalı cevap
                      complete: () => {console.log("Complete çalıştı.")}, // Hatalı-hatasız cevap sonrası çalışacak alan.
                   })
  }
}
