import { Tasks } from './../../tasks';
import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

 TasksList: Tasks[];
 isChecked: boolean;
 date: any;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
    this.getDate();
  }

  getTasks(): void {
    this.tasksService.getTasks()
    .subscribe(tasks => this.TasksList = tasks);
  }

  deleteTask(task: Tasks): void {
    var confTask = confirm('ნამდვილად გსურთ დავალების წაშლა?')
    if (confTask) {
      this.TasksList = this.TasksList.filter(t => t !== task);
      this.tasksService.deleteTask(task).subscribe();
    }
  }

  addTask(name: string): void {
  let title = name.trim();
    if (!title) { return; }
    this.tasksService.addTask({ title, isDone: false } as Tasks)
      .subscribe(task => {
        this.TasksList.push(task);
      });

  }
  updateTask(task): void {

    var updatedTask = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };

      this.tasksService.updateTask(updatedTask).subscribe(data => {
      task.isDone = !task.isDone;
     
    
     });
 }

  getDate() {
   this.date = new Date();
  }

}
