import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectSelectionComponent } from './components/project-selection/project-selection.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { CalenderViewComponent } from './components/calender-view/calender-view.component';
import { ResourceAllocationComponent } from './components/resource-allocation/resource-allocation.component';
import { FileManagementComponent } from './components/file-management/file-management.component';
import { DiscussionForumComponent } from './components/discussion-forum/discussion-forum.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomepageComponent,
    LoginComponent,
    ProjectSelectionComponent,
    NewProjectComponent,
    DashboardComponent,
    ProjectDetailsComponent,
    TaskBoardComponent,
    CalenderViewComponent,
    ResourceAllocationComponent,
    FileManagementComponent,
    DiscussionForumComponent,
    NotificationsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
