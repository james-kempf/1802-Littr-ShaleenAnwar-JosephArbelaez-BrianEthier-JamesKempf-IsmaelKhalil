// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ViewFriendsComponent } from './components/view-friends/view-friends.component';
import { NavComponent } from './components/nav/nav.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';

export const routes: Routes = [
  { path: 'view-friends', component: ViewFriendsComponent },
  { path: 'create-post', component: CreatePostComponent},
  { path: 'password-recovery', component: PasswordRecoveryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }