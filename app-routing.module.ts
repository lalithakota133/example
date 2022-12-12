import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IssuebooksComponent } from './issuebooks/issuebooks.component';
import { LibpageComponent } from './libpage/libpage.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { LoginComponent } from './login/login.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { StartComponent } from './start/start.component';
import { UpdatelibrarianComponent } from './updatelibrarian/updatelibrarian.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewissuedbooksComponent } from './viewissuedbooks/viewissuedbooks.component';
import { ViewlibrarianComponent } from './viewlibrarian/viewlibrarian.component';

const routes: Routes = [
  {path:'',component:StartComponent},
  {path:'home',component:HomeComponent},
  
  {path:'home/login',component:LoginComponent},
  {path:'home/aboutus',component:AboutusComponent},];
  const routes1: Routes = [
    {path:'*',component:LoginComponent},
    {path:'home/login/aboutus',component:AboutusComponent},
    {path:'home/login/libpage',component:LibpageComponent},
    {path:'home/login/adminpage',component:AdminpageComponent},
    {path:'home/login/adminpage/librarian',component:LibrarianComponent},
    {path:'home/login/adminpage/viewlibrarian',component:ViewlibrarianComponent},
    {path:'home/login/adminpage/viewlibrarian/update',component:UpdatelibrarianComponent},
    {path:'home/login/libpage/addbook',component:AddbookComponent},
    {path:'home/login/libpage/viewbook',component:ViewbooksComponent},
    {path:'home/login/libpage/viewbook',component:ViewbooksComponent},
    {path:'home/login/libpage/issuebook',component:IssuebooksComponent},
    {path:'home/login/libpage/viewissuebook',component:ViewissuedbooksComponent},
    {path:'home/login/libpage/returnbook',component:ReturnbookComponent},
    {path:"**",redirectTo:"home"}
   
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes1)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
