import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { SongListComponent } from "./songList.component";
import { MyPlayListComponent } from "./MyPlayList.component";

import * as fromRed from "./reducer";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ jobs: fromRed.reducer })
  ],
  declarations: [
    AppComponent,
    SongListComponent,
    MyPlayListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
