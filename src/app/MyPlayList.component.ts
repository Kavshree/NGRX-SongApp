import { Component, Input } from '@angular/core';

@Component({
    selector: 'play-list',
    template: `<section>
    <h4 class="text-pink">My playlist</h4>
    <ul class="text-purple">
        <li *ngFor="let p of playList"> {{p.name}} </li>
    </ul>
    </section>`,
    styles: [`
    .text-pink{color:#ed05ce}
    .text-purple li{color: purple;list-style-type:none;}
    `]
})

export class MyPlayListComponent {
    @Input() playList;
    ngOnChanges(changes) {
        console.log(changes)
    }
}