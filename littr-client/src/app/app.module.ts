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
import { CreatePostComponent } from './components/create-post/create-post.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCatComponent } from './components/update-cat/update-cat.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SearchComponent } from './components/search/search.component';

// Client
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Services
import { FriendService } from './services/friend.service';
import { PostService } from './services/post.service';
import { PasswordRecoveryService } from './services/password-recovery.service';
import { CatService } from './services/cat.service';
import { LoginService } from './services/login.service';

// Interceptors
import { CustomInterceptor } from './session/custom-interceptor';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewFriendsComponent,
    CreatePostComponent,
    PasswordRecoveryComponent,
    PasswordResetComponent,
    SearchComponent,
    RegisterComponent,
    UpdateCatComponent,
    LoginComponent,
    LogoutComponent,
    ViewPostsComponent
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
    PasswordRecoveryService,
    FriendService,
    PostService,
    CatService,
    LoginService, {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
