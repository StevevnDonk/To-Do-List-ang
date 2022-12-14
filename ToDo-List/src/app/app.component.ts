import { Component } from '@angular/core';
import { Todo } from './ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos : Todo[] = [];
  newTodo : string;
// this is the function to add new todo
  saveTodo(){
    if(this.newTodo){
      	let todo = new Todo();
        todo.name = this.newTodo;
        todo.isCompleted = true
        this.todos.push(todo);
        this.newTodo = '';
    }else{
      alert('Please Enter Todo');
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i)=> i !== id);
  }
}
