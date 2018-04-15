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
import { LogoutComponent } from './components/logout/logout.component';

// Client
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Services
import { FriendService } from './services/friend.service';
import { PostService } from './services/post.service';

// Interceptors
import { CustomInterceptor } from './session/custom-interceptor';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCatComponent } from './components/update-cat/update-cat.component';
import { CatService } from './services/cat.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewFriendsComponent,
    CreatePostComponent,
    SearchComponent,
    RegisterComponent,
    UpdateCatComponent,
    LoginComponent,
    LogoutComponent
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
