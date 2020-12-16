import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './main/components/base/base.component';
import { HomeComponent } from './main/components/home/home.component';
import { PageNotFoundComponent } from './main/components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './main/modules/material/material.module';
import { AboutComponent } from './main/components/about/about.component';
import { SharedModule } from './main/modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
