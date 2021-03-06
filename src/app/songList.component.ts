import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
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
  selector: "song-list",
  template: `
    <section>
      <input type="text" placeholder="Name" #nameInput />
      <button (click)="onSubmit(nameInput.value)">Add song</button>

      <br />

      <ul>
        <li *ngFor="let item of jobStatus.ordersReadyForChecklist">
          <input
            type="checkbox"
            [checked]="item.isChecked"
            #checkInput
            (change)="checkToggle($event, item)"
          />
          {{ item.songName }}
        </li>
      </ul>

      <button (click)="addToPlayList()">add to playlist</button>
    </section>
  `
})
export class SongListComponent {
  public jobStatus: JobStatus;

  @Output() playListChange = new EventEmitter();
  @Output() totalSongsEvent = new EventEmitter();
  songsSelected = [];

  constructor(private store: Store<{ jobs: State }>) {}

  onSubmit(songName: string) {
    this.totalSongsEvent.emit(this.jobStatus.ordersReadyForChecklist.length);
    this.store.dispatch(saveSongToChecklist({ songName: songName }));
  }

  ngOnInit() {
    this.store.select("jobs").subscribe(x => {
      console.log(x);
      this.jobStatus = x.jobStatus;
      this.totalSongsEvent.emit(this.jobStatus.ordersReadyForChecklist.length);
    });
  }

  checkToggle($event, item) {
    if ($event.target.checked) {
      this.songsSelected.push(item.songName);
    } else {
      const index = this.songsSelected.indexOf(item.songName);
      if (index > -1) {
        this.songsSelected.splice(index, 1);
      }
    }
  }

  addToPlayList() {
    this.playListChange.emit(this.songsSelected);
    console.log(this.songsSelected);
  }
}
