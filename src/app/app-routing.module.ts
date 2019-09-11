import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import {SettingComponent} from './setting/setting.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
