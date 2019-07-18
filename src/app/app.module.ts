import { StarWarsApiService } from './services/star-wars-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StarWarsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
