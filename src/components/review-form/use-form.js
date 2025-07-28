import { useCallback, useEffect, useReducer } from "react";
import { addComment } from "../../data/entities/reviews/slice.js";
import { addComment as linkCommentToRestaurant } from "../../data/entities/restuarants/slice.js";
import { useDispatch } from "react-redux";
import { guid } from "../../data/helpers.js";
import { useLoginContext } from "../login-context/hooks.js";

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
const SUBMIT_FORM_ACTION = "submitForm";

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

    case SUBMIT_FORM_ACTION: {
      return DEFAULT_STATE;
    }

    case CLEAR_FORM_ACTION: {
      return DEFAULT_STATE;
    }
    default: {
      return state;
    }
  }
}

export const useForm = ({ restaurantId }) => {
  const { user } = useLoginContext();
  const [form, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const dispatchRedux = useDispatch();

  useEffect(() => {
    setName(user.name || "");
  }, [user]);

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

  const submit = () => {
    const commentId = guid();
    dispatchRedux(
      addComment({
        text: form.comment,
        rating: form.rating,
        id: commentId,
        userId: user.userId,
      }),
    ); // todo add async emulation (server saving)
    dispatchRedux(
      linkCommentToRestaurant({ restaurantId, commentId: commentId }),
    );
    dispatch({
      type: SUBMIT_FORM_ACTION,
      payload: {
        dispatchRedux,
        restaurantId,
      },
    });
  };

  return {
    form,
    setName,
    setComment,
    incrementRating,
    decrementRating,
    clear,
    submit,
  };
};
