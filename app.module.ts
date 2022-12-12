import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { ViewlibrarianComponent } from './viewlibrarian/viewlibrarian.component';
import { LibpageComponent } from './libpage/libpage.component';
import { ViewissuedbooksComponent } from './viewissuedbooks/viewissuedbooks.component';
import { IssuebooksComponent } from './issuebooks/issuebooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { StartComponent } from './start/start.component';
import { ViewserviceService } from './viewlibrarian/viewservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UpdatelibrarianComponent } from './updatelibrarian/updatelibrarian.component';
import { UpdateserviceService } from './updatelibrarian/updateservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LibrarianComponent,
    ViewlibrarianComponent,
    LibpageComponent,
    ViewissuedbooksComponent,
    IssuebooksComponent,
    AddbookComponent,
    ViewbooksComponent,
    ReturnbookComponent,
    AdminpageComponent,
    StartComponent,
    AboutusComponent,
    UpdatelibrarianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,
    UpdateserviceService,
    ViewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
