import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ISongs } from './Songs.interface'
import { ADDSONG } from './actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  songs$ : Observable<[ISongs]>;
  songList;
  constructor(private _store: Store<{songsReducer}>) { 
    this._store.select('songsReducer').pipe().subscribe(da => {console.log(da); this.songList = da});
  }
  addSong() {
    this._store.dispatch(ADDSONG({newSong: [{"id":420,"Name":"fdfdfdf","Adfdflbum":"dfdf"}] }))
  }
}
