import { INCREASE, DECREASE } from "./post.constants";

export const increase = () => {
  return {
    type: INCREASE,
  };
};
export const decrease = () => {
  return {
    type: DECREASE,
  };
};
