import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  milestones: string[] = [];
  newMilestone: string = '';
  
  

  constructor() { }

  ngOnInit(): void {
    
    this.loadMilestones();
  }

  addMilestone() {
    if (this.newMilestone.trim() !== '') {
      this.milestones.push(this.newMilestone);
      this.saveMilestones();
      this.newMilestone = ''; // Clear input field after adding milestone
    }
  }

  saveMilestones() {
    localStorage.setItem('savedMilestones', JSON.stringify(this.milestones));
  }

  loadMilestones() {
    const savedMilestones = localStorage.getItem('savedMilestones');
    if (savedMilestones) {
      this.milestones = JSON.parse(savedMilestones);
    }
  }

 
  
}

