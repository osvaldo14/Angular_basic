import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { 
  MatSidenavModule,
  MatIcon,
  MatToolbar,
  MatNavList,
  MatButton,
  MatRipple,
  MatToolbarRow
} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MatIcon,
    MatToolbar,
    MatNavList,
    MatButton,
    MatRipple,
    MatToolbarRow
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
