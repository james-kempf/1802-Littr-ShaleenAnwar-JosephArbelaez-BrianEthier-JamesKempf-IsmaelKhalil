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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FriendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }