import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full'},
  // { path: 'main', component: MainComponent},
  //{ path: 'detail/:id', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
