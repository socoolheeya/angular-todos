import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'td-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input('todoTitle')
  title: string;
  todoItemList: any;
  todoTitle: string;
  constructor() {
  }

  ngOnInit() {
    this.title = '';
    this.todoItemList = new Array();
  }

  addTodo(newTitle) {
    const title = newTitle.value;
    if (!title) {
      alert('할 일을 먼저 작성하세요');
      return;
    }
    const todo = {
      title: newTitle.value,
      createDate : Date.now()
    };

    this.todoItemList.push(todo);
    newTitle.value = '';
  }

  removeTodo(todo) {
    const idx = this.todoItemList.findIndex(() => {
      return todo;
    });

    this.todoItemList.splice(idx, 1);
  }


}
