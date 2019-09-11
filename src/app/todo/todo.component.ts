import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'td-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoValue: string;
  todoItem: any;
  constructor() {
  }

  ngOnInit() {
    this.todoValue = '';
  }

  addTodo() {
    this.todoItem = `<div>this.todoValue</div>`;
  }


}
