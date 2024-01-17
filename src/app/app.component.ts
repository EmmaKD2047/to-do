import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

interface Tasks {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';

  tasks : any[] = [];

  @ViewChild('inputEl') taskInput : ElementRef;

  //function to add a task to the DOM
  addTask(){
    if(this.taskInput.nativeElement.value !== ''){
      let newObject = { id: this.tasks.length + 1, text: this.taskInput.nativeElement.value, completed: false };
      this.tasks.push(newObject);
      this.taskInput.nativeElement.value = '';
    }
  }

  //function to delete a task from the DOM
  deleteTask(task: Tasks): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  strikeThroughText(task : Tasks){
    task.completed = !task.completed;
  }

  countCompletedTasks(): number {
    return this.tasks.reduce((acc, obj) => acc + (obj.completed ? 1 : 0), 0);
  }
}
