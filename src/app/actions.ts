import { createAction, props } from '@ngrx/store';

export const saveSongToChecklist = createAction(
    '[PERSON_API] Save person to checklist array',
    props<{
        songName: string;
    }>()
);