import { TIMER } from "./constants";

const initialState = {
  lenguage: {
    en: "english",
    ru: "russian",
  },
  fade: false,
  modalOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER:
      return {
        ...state,
        fade: true,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modalOpen: true,
        image: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpen: false,
        image: null,
      };
    default:
      return state;
  }
};

export default reducer;
