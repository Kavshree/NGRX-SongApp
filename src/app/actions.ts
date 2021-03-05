import { createAction, props } from '@ngrx/store';
import { ISongs } from './Songs.interface'

export const ADDSONG = createAction('ADDSONG',props<{newSong}>() )