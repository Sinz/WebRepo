/*
 * @Since: 2020-09-22 23:15:24
 * @LastEditTime: 2020-09-25 01:07:34
 * @LastEditors: Zhao.J
 * @FilePath: \anulardemo\demo\src\app\app.component.ts
 * @Description: 组件
 */
import { Component } from '@angular/core';

const todos = [
  {
    id: 1,
    title: '吃饭',
    done: true
  },
  {
    id: 2,
    title: '唱歌',
    done: false
  },
  {
    id: 3,
    title: '写代码',
    done: true
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = JSON.parse(window.localStorage.getItem('todos')) || [];

  public visibility: string = 'all';

  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null;


  ngOnInit(): void {
    this.hashChangeHandler();
    // bind this，绑定组件内this指向
    window.onhashchange = this.hashChangeHandler.bind(this);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    window.localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  hashChangeHandler() {
    // 当用户点击了锚点的时候，获取当前的锚点标识
    // 动态的将根组件中的visibility 设置为锚点标识
    const hash = window.location.hash.substr(1);
      switch(hash) {
        case '/':
          this.visibility = 'all';
          break;
        case '/completed':
          this.visibility = 'completed';
          break;
        case '/active':
          this.visibility = 'active';
          break;
      }
  }

  get filterTodos() {
    if (this.visibility === 'all'){
      return this.todos;
    } else if (this.visibility === 'active'){
      return this.todos.filter(t => !t.done);
    } else if (this.visibility === 'completed'){
      return this.todos.filter(t => t.done);
    } 
  }

  addTodo (e): void{
    const titleText = e.target.value;
    if (!titleText.length){
      return
    };
    this.todos.push({
      id: this.todos.length,
      title: titleText,
      done: false
    });
    // 清除文本框
    e.target.value = ''
    // console.log(this.todos);
  }

  get toggleAll() {
    return this.todos.every(t => t.done);
  }
  set toggleAll(val) {
    this.todos.forEach(t => t.done = val);
  }

  removeTodo(index: number) {
    this.todos.splice(index,1);
  }

  saveEdit(todo,e) {
    this.currentEditing = null;
    todo.title = e.target.value;
  }

  handleEditKeyup(e) {
    const {keyCode,target} = e;
    if(keyCode === 27){
      target.value = this.currentEditing.title;
      this.currentEditing = null;
    }
  }

  get remaningCount() {
    return this.todos.filter(t => !t.done).length;
  }

  clearAllDone() {
      this.todos = this.todos.filter(t => !t.done);
  }
}

