import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { Blog2Component } from './components/blog2/blog2.component';
import { Blog3Component } from './components/blog3/blog3.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "blog", component: BlogComponent },
  { path: "blog2", component: Blog2Component },
  { path: "blog3", component: Blog3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
