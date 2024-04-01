import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectSelectionComponent } from './components/project-selection/project-selection.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { CalenderViewComponent } from './components/calender-view/calender-view.component';
import { ResourceAllocationComponent } from './components/resource-allocation/resource-allocation.component';
import { FileManagementComponent } from './components/file-management/file-management.component';
import { DiscussionForumComponent } from './components/discussion-forum/discussion-forum.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'project-details', component: ProjectDetailsComponent},
      { path: 'task-board', component: TaskBoardComponent },
      { path: 'calendar-view', component: CalenderViewComponent },
      { path: 'resource-allocation', component: ResourceAllocationComponent },
      { path: 'file-management', component: FileManagementComponent},
      { path: 'discussion-forum', component: DiscussionForumComponent },
      { path: '', redirectTo: 'project-details', pathMatch: 'full' }, // Default route
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'newProject', component: NewProjectComponent },
  { path: 'projectSelection', component: ProjectSelectionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'notifications', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
