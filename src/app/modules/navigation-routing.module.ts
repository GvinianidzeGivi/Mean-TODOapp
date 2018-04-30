import { ErrorComponent } from './../error/error.component';
import { TasksListComponent } from './../tasks-list/tasks-list.component';
import { RegistrationComponent } from './../registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks',  component: TasksListComponent },
  { path: 'tasks/:id',  component: TasksListComponent },
  { path: 'registration',  component: RegistrationComponent },
  { path: '**', component: ErrorComponent}  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
