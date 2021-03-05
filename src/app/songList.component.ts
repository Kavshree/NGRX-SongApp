import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ISongs } from './Songs.interface'
import { ADDSONG } from './actions'

@Component({
    selector: 'song-list',
    template: `<section>
    <h4 class="text-pink">Add songs to your playlist</h4>
       <ul>
            <li *ngFor="let s of songListArray">
            <input type="checkbox" [(ngModel)]="s.isSelected" />
                {{s.name}}
            </li>
       </ul>
       <div>
           <button (click)="addToPlayList()"> Add to playlist</button>
           
       </div>
       <div>
        Enter a new song:
            <input type="text" [(ngModel)]="newsongName"/>
            <button (click)="addSong()"> Add new song</button>
        </div>
        <hr>
    </section>`,
    styles: [`
    .text-pink{color:#ed05ce}
    ul li{list-style-type:none;}
    `]
    
})

export class SongListComponent {
    songs$ : Observable<[ISongs]>;
    songList;newsongName;
    songListArray = [{name: "Song1", "isSelected": false},{name: "Song2", "isSelected": false},{name: "Song3", "isSelected": false}];
    songsSelected=[];
    @Output() playListChange= new EventEmitter();
    @Output() totalSongsEvent = new EventEmitter();

    constructor(private _store: Store<{songsReducer}>) { 
        this._store.select('songsReducer').pipe().subscribe(da => {console.log(da); this.songList = da});
      }
      ngOnInit() {
        this.totalSongsEvent.emit(this.songListArray.length);
    }
      addSong() {
        let newSongObj = {name: "", "isSelected": false}
        newSongObj.name = this.newsongName; 
        this.songListArray.push(newSongObj);
        this.newsongName = "";
        this._store.dispatch(ADDSONG({newSong: this.songListArray }));
        this.totalSongsEvent.emit(this.songListArray.length);
        //this._store.dispatch(ADDSONG({newSong: [{"id":420,"Name":"fdfdfdf","Adfdflbum":"dfdf"}] }))
      }
      addToPlayList() {
        this.songsSelected = []
        this.songsSelected = this.songListArray.filter((f) => f.isSelected)
        this.playListChange.emit(this.songsSelected)
        console.log(this.songsSelected)
      }

}