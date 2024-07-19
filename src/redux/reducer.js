import { TIMER } from "./constants";

const initialState = {
  lenguage: {
    en: "english",
    ru: "russian",
  },
  fade: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER:
      return {
        ...state,
        fade: true,
      };
    default:
      return state;
  }
};

export default reducer;
