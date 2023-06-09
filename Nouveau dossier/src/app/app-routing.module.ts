import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AdvancedComponent } from './advanced/advanced.component';



const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'advanced', component: AdvancedComponent },
  { path: "**", component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
