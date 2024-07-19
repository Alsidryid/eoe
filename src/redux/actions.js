import { TIMER } from "./constants";

export const startTimer = (payload) => {
  return {
    type: TIMER,
    payload,
  };
};
