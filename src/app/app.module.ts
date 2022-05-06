import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgThumbnailComponent } from './img-thumbnail/img-thumbnail.component';
import { ImgBannerComponent } from './img-banner/img-banner.component';
import { ImgComponent } from './img/img.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';


@NgModule({
  declarations: [
    AppComponent,
    ImgThumbnailComponent,
    ImgBannerComponent,
    ImgComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]



})
export class AppModule { }
