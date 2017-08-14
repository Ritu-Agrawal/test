import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SimpleHTTPComponent } from './components/simpleHttpComponent';
import { YouTubeSearchComponent } from './components/youTubeSearchComponent';
import { youTubeServiceInjectables } from './components/YouTubeSearchComponent';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHTTPComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    youTubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
