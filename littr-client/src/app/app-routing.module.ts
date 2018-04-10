// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ViewFriendsComponent } from './components/view-friends/view-friends.component';

export const routes: Routes = [
  { path: 'view-friends', component: ViewFriendsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }