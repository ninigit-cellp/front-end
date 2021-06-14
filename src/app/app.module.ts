import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor-service.service';
import { VoituresListComponent } from './voitures-list/voitures-list.component';
import { VoiturecComponent } from './voiturec/voiturec.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    VoituresListComponent,
    VoiturecComponent,
    CommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }