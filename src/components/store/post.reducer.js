import { INCREASE, DECREASE } from "./post.constants";

const initialState = {
  value: 0,
  title: "My counter",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREASE:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
