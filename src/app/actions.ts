import { createAction, props } from '@ngrx/store';
//import { Songs } from './Songs.interface';
import { ISongs } from './Songs.interface'


export const ADDSONG = createAction('ADDSONG',props<{newSong}>() )