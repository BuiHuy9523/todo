import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { TodoService} from '../todo.service';
import { ITodo} from './itodo';
import { Observer} from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  // inputController = new FormControl()
  constructor(private todoService: TodoService ) { }
  ngOnInit() {
    this.todoService.getTodos().subscribe(next => {
      this.todoList = next;
    });
  }
  deleteTodo(i) {
    const todo = this.todoList[i];
    this.todoService.deleteTodo(todo.id).subscribe(
      () => {
        this.todoList = this.todoList.filter(
          t => t.id !== todo.id
        );
      }
    );
  }
  // updateTodo(todo: ITodo): Observer<ITodo> {
  //   return this.http.patch<ITodo>(
  //     `${this.API_URL}/${todo.id}`, todo)
  //   )
  // }

}
