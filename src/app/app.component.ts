import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ISongs } from './Songs.interface'
import { ADDSONG } from './actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.red-font{color:red}
    .green-font{color:green}`
 ]
})
export class AppComponent {
  playList=[]; totalSongs;
  playListChangeParent(e) {
    this.playList = e;
    console.log(this.playList)
  }
  totalSongsEvent(e) {
    this.totalSongs = e;
  }
}
