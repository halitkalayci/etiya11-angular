import { Component } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  todo:Todo[] = [
    {userId:1, id:1, title:'abc', completed:false},
    {userId:2, id:2, title:'bqwrbqwrnq', completed:true},
  ]
}
