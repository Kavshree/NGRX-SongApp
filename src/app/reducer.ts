import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {ADDSONG } from './actions';
import { ISongs } from './Songs.interface'

export const initialSongs : Array<ISongs> = [{name: "Song1", "isSelected": false},{name: "Song2", "isSelected": false},{name: "Song3", "isSelected": false}];

export const Songreducer = createReducer(initialSongs,
    on(ADDSONG, (state, {newSong}) => [...state, ...newSong] )   
)


export function reducer(store, action) {
    return Songreducer(store, action)
}