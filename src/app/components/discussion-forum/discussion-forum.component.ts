import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-forum',
  templateUrl: './discussion-forum.component.html',
  styleUrls: ['./discussion-forum.component.css']
})
export class DiscussionForumComponent implements OnInit{

  threads: any[] = [];
  newThread: any = {
    title: '',
    creator: '',
    date: '',
    content: ''
  };

  isFormVisible: boolean = false;

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }

  constructor() { }

  ngOnInit() {
    this.loadSavedThreads();
  }
  
  onSubmit() {
    // Add validation logic if needed
    if (this.newThread.title.trim() !== '' && this.newThread.content.trim() !== '') {
      // Add the new thread to the threads array
      this.threads.push(this.newThread);
      
      // Save threads to localStorage
      this.saveThreads();
      
      // Clear the form
      this.clearForm();
    }
  }

  deleteThread(thread: any) {
    const index = this.threads.indexOf(thread);
    if (index !== -1) {
      this.threads.splice(index, 1);
      this.saveThreads();
    }
  }

  loadSavedThreads() {
    const savedThreads = localStorage.getItem('savedThreads');
    if (savedThreads) {
      this.threads = JSON.parse(savedThreads);
    }
  }

  saveThreads() {
    localStorage.setItem('savedThreads', JSON.stringify(this.threads));
  }

  clearForm() {
    this.newThread = {
      title: '',
      creator: '',
      date: '',
      content: ''
    };
  }
}
