import { Component } from '@angular/core';
import { ProjectNameService } from 'src/app/Useful-Services/project-name.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  projectName: String = "";

  constructor(private projectNameService: ProjectNameService)
  {
    this.projectName = this.projectNameService.projectName
  }









  showCreateIssuePopup = false; // Variable to control the visibility of the "Create Issue" pop-up

  // ...

  // Function to open the "Create Issue" pop-up
  showCreateIssueForm() {
    this.showCreateIssuePopup = true;
  }

  // Function to close the "Create Issue" pop-up
  closeCreateIssueForm() {
    this.showCreateIssuePopup = false;
  }

  // Function to submit the "Create Issue" form (you can customize this logic)
  submitIssueForm() {
    // Close the pop-up after form submission
    this.closeCreateIssueForm();
  }

  // Initialize the pop-up to be hidden
  showPopupFlag = false;
  

  // Function to show the pop-up
  showPopup() {
    this.showPopupFlag = true;
    this.showCreateEpicPopup = false;
  }

  // Function to close the pop-up
  closePopup() {
    this.showPopupFlag = false;
  }

  showCreateEpicPopup = false;

  showCreateEpicForm() {
    this.showCreateEpicPopup = true;
    
  }
  submitEpicForm() {
    this.closeCreateEpicForm();
  }
  closeCreateEpicForm() {
    this.showCreateEpicPopup = false;
  }

  showCreateUserStoriesPopup = false; // Variable to control the visibility of the pop-up

  // ...

  // Function to open the "Create User Stories" pop-up
  showCreateUserStoriesForm() {
    this.showCreateUserStoriesPopup = true;
  }

  // Function to close the "Create User Stories" pop-up
  closeCreateUserStoriesForm() {
    this.showCreateUserStoriesPopup = false;
  }

  // Function to submit the "Create User Stories" form (you can customize this logic)
  submitUserStoriesForm() {
    // Your form submission logic here
    
    // Close the pop-up after form submission
    this.closeCreateUserStoriesForm();
  }


  showCreateTaskPopup = false; // Variable to control the visibility of the "Create Task" pop-up

  // ...

  // Function to open the "Create Task" pop-up
  showCreateTaskForm() {
    this.showCreateTaskPopup = true;
  }

  // Function to close the "Create Task" pop-up
  closeCreateTaskForm() {
    this.showCreateTaskPopup = false;
  }

  // Function to submit the "Create Task" form (you can customize this logic)
  submitTaskForm() {
    // Your form submission logic here
    

    // Close the pop-up after form submission
    this.closeCreateTaskForm();
  }
}
