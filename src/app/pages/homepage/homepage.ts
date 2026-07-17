import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  todos:Todo[] = [
    {userId:1, id:1, title:'abc', completed:false}, 
    {userId:2, id:2, title:'def', completed:true},
    {userId:3, id:3, title:'nrqwn', completed:false},
  ]
}
