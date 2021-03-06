import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { saveSongToChecklist } from "./actions";

import { State } from "./reducer";

export interface JobStatus {
  status: string;
  ordersReadyForChecklist: PersonChecklist[];
}

export interface PersonChecklist {
  songName: string;
  isChecked: boolean;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styles: [
    `
      .red-font {
        color: red;
      }
      .green-font {
        color: green;
      }
    `
  ]
})
export class AppComponent {
  playList = [];
  totalSongs;
  playListChangeParent(e) {
    this.playList = e;
    console.log(this.playList);
  }
  totalSongsEvent(e) {
    this.totalSongs = e;
  }
}
