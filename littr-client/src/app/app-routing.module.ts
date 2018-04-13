// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ViewFriendsComponent } from './components/view-friends/view-friends.component';
import { NavComponent } from './components/nav/nav.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

export const routes: Routes = [
  { path: 'view-friends', component: ViewFriendsComponent },
  { path: 'create-post', component: CreatePostComponent},
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'password-reset', component: PasswordResetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }