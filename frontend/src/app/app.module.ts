import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MessagesComponent} from './messages.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCardModule} from '@angular/material';
import {WebService} from './web.service';
import {HttpClientModule} from '@angular/common/http';
import {NewMessageComponent} from './new-message.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';
import {NavComponent} from './nav.component';
import {MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {RegisterComponent} from './register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from './auth.service';
import {LoginComponent} from './login.component';

var routes =[{
  path:'',
  component: HomeComponent
},
{
  path:'messages',
  component: MessagesComponent
},
{
  path:'messages/:name',
  component: MessagesComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'login',
  component: LoginComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    WebService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
