import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { IdentityGuard } from './services/identity.guard';
import { PostNewComponent } from './components/post-new/post-new.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    PostDetailComponent,
    UserEditComponent,
    PostNewComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule,
    NgxPaginationModule
  ],
  providers: [
    appRoutingProviders,
    UserService,
    PostService,
    IdentityGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
