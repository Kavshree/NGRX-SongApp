import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SongListComponent } from './songList.component'
import { MyPlayListComponent } from './MyPlayList.component';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, SongListComponent, MyPlayListComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    StoreModule.forRoot({songsReducer : reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
