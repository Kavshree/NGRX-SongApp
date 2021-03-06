import { createReducer, on, Action } from "@ngrx/store";
import { saveSongToChecklist } from "./actions";
import { JobStatus } from "./app.component";

export interface State {
  jobStatus: JobStatus;
}

const initialState: State = {
  jobStatus: {
    status: "Pending",
    ordersReadyForChecklist: [
      {
        songName: "default",
        isChecked: false
      }
    ]
  }
};

const jobStatusre = createReducer(
  initialState,
  on(saveSongToChecklist, (state, action) => ({
    ...state,
    jobStatus: {
      ...state.jobStatus,
      ordersReadyForChecklist: [
        ...state.jobStatus.ordersReadyForChecklist,
        {
            songName: action.songName,
          isChecked: false
        }
      ]
    }
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return jobStatusre(state, action);
}
