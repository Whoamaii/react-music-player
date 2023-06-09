import {
  SET_CURRENT_TRACK_INDEX,
  SET_VOLUME,
  SET_SECONDS,
  SET_TIME,
  SET_CURR_TIME,
} from "../actionTypes";

const initialState = {
  currentTrackIndex: 0,
  volume: 1,
  seconds: "",
  time: {
    min: "",
    sec: "",
  },
  currTime: {
    min: "",
    sec: "",
  },
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TRACK_INDEX:
      return {
        ...state,
        currentTrackIndex: action.payload,
      };
    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload,
      };
    case SET_SECONDS:
      return {
        ...state,
        seconds: action.payload,
      };
    case SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
    case SET_CURR_TIME:
      return {
        ...state,
        currTime: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
