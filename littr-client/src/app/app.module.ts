// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ViewFriendsComponent } from './components/view-friends/view-friends.component';

// Client
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FriendService } from './services/friend.service';
import { PostService } from './services/post.service';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordRecoveryService } from './services/password-recovery.service';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewFriendsComponent,
    CreatePostComponent,
    PasswordRecoveryComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FriendService,
    PostService,
    PasswordRecoveryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
