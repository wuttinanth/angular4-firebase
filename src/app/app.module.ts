import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageService } from './pages/shared/page.service';

import { RegisterComponent } from './pages/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    MenuBarComponent,
    HeaderComponent,
    PageListComponent,
    RegisterComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

