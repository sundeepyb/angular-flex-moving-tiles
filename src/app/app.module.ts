import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRouter } from './app.route';
import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AppRouter
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
