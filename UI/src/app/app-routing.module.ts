import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AdvancedComponent } from './advanced/advanced.component';




const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: "userModification/:id", component: SingleUserComponent },
  { path: "createUser", component: CreateUserComponent },
  { path: "advanced", component: AdvancedComponent },
  { path: "**", component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
