import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  title: any;
}

function setDataSource(title) {
  for(let i = 0; i < 100; i++) {
    title[i] = 'todo title' + i;
  }
}

setDataSource([]);

