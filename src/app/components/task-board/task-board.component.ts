import { Component } from '@angular/core';

export interface Task {
  name: string;
  details: string;
  status: string;
}

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css'],
})
export class TaskBoardComponent {
  showTaskForm = false;
  taskTitle: string | any;
  taskDetails: string | any;
  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const tasks = JSON.parse(savedTasks);
      this.todoTasks = tasks.filter((task: Task)=> task.status === 'To Do');
      this.inProgressTasks = tasks.filter((task: Task)=> task.status === 'In Progress');
    }
  }

  addTask() {
    if (this.taskTitle && this.taskDetails) {
      this.todoTasks.push({
        name: this.taskTitle,
        details: this.taskDetails,
        status: 'To Do',
      });
      this.saveTasks();
      this.taskTitle = '';
      this.taskDetails = '';
      this.showTaskForm = false;
    }
  }

  deleteTask(task: Task, list: string) {
    const index = list === 'todo' ? this.todoTasks.indexOf(task) : this.inProgressTasks.indexOf(task);
    if (index !== -1) {
      if (list === 'todo') {
        this.todoTasks.splice(index, 1);
      } else {
        this.inProgressTasks.splice(index, 1);
      }
      this.saveTasks();
    }
  }

  moveTask(task: Task) {
    const index = this.todoTasks.indexOf(task);
    if (index !== -1) {
      this.todoTasks[index].status = 'In Progress';
      this.inProgressTasks.push(this.todoTasks[index]); // Add to In Progress column
      this.todoTasks.splice(index, 1); // Remove from To Do column
      this.saveTasks();
    }
  }

  cancelTask() {
    this.showTaskForm = false;
    this.taskTitle = '';
    this.taskDetails = '';
  }

  completeTask(task: Task) {
    const index = this.inProgressTasks.indexOf(task);
    if (index !== -1) {
      this.inProgressTasks.splice(index, 1); // Remove from In Progress column
      task.status = 'Completed'; // Update task status to Completed
      this.saveTasks();
    }
  }

  private saveTasks() {
    const allTasks = [...this.todoTasks, ...this.inProgressTasks]; // Combine tasks from both columns
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }
}
