import { useCallback, useReducer } from "react";

const DEFAULT_STATE = {
  name: "",
  comment: "",
  rating: 0,
};

const SET_NAME_ACTION = "setName";
const SET_COMMENT_ACTION = "setComment";
const INCREMENT_RATING_ACTION = "incrementRating";
const DECREMENT_RATING_ACTION = "decrementRating";
const CLEAR_FORM_ACTION = "clearForm";

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_NAME_ACTION: {
      return { ...state, name: payload };
    }
    case SET_COMMENT_ACTION: {
      return { ...state, comment: payload };
    }

    case INCREMENT_RATING_ACTION: {
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    }

    case DECREMENT_RATING_ACTION: {
      return { ...state, rating: Math.max(state.rating - 1, 0) };
    }

    case CLEAR_FORM_ACTION: {
      console.log("CLEAR_FORM_ACTION");
      return DEFAULT_STATE;
    }
    default: {
      return state;
    }
  }
}

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_STATE);

  const setName = useCallback((text) => {
    dispatch({ type: SET_NAME_ACTION, payload: text });
  }, []);

  const setComment = useCallback((text) => {
    dispatch({ type: SET_COMMENT_ACTION, payload: text });
  }, []);

  const incrementRating = useCallback(() => {
    dispatch({ type: INCREMENT_RATING_ACTION });
  }, []);

  const decrementRating = useCallback(() => {
    dispatch({ type: DECREMENT_RATING_ACTION });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: CLEAR_FORM_ACTION });
  }, []);

  return {
    form,
    setName,
    setComment,
    incrementRating,
    decrementRating,
    clear,
  };
};
