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
import { ProfileComponent } from './components/profile/profile.component'
import { CreatePostComponent } from './components/create-post/create-post.component';
import { LoginComponent } from './components/login/login.component';

// Client
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FriendService } from './services/friend.service';
import { PostService } from './services/post.service';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCatComponent } from './components/update-cat/update-cat.component';
import { LoginService } from './services/login.service';


//Services
import { UploadFileService } from './services/uploadFile.service';
import { CatService } from './services/cat.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewFriendsComponent,
    CreatePostComponent,
    ProfileComponent,
    RegisterComponent,
    UpdateCatComponent,
    LoginComponent
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
    UploadFileService,
    CatService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
