import { useReducer, useRef } from "react";
import { ReviewFormCounter } from "../review-form-counter/review-form-counter.jsx";
import "./review-form.css";

const DEFAULT_STATE = {
  name: "",
  comment: "",
  rating: 0,
};

const SET_NAME_ACTION = "setName";
const SET_COMMENT_ACTION = "setComment";
const SET_RATING_ACTION = "setRating";
const CLEAR_FORM_ACTION = "clearForm";

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_NAME_ACTION: {
      return { ...state, name: payload };
    }
    case SET_COMMENT_ACTION: {
      return { ...state, comment: payload };
    }
    case SET_RATING_ACTION: {
      return { ...state, rating: payload };
    }
    case CLEAR_FORM_ACTION: {
      return DEFAULT_STATE;
    }
    default: {
      return state;
    }
  }
}

const isFormClear = (form) => {
  let isClear = true;
  Object.entries(form).forEach(([, value]) => {
    if (value) {
      isClear = false;
    }
  });
  return isClear;
};

export const ReviewForm = () => {
  const refCounter = useRef(null);

  const [form, dispatch] = useReducer(reducer, DEFAULT_STATE);

  const { name, comment } = form;

  return (
    <>
      <h3>Добавить отзыв</h3>
      <form className="review-form" onClick={(e) => e.preventDefault()}>
        <label className="form-label" htmlFor="form-name">
          Имя:
        </label>
        <input
          id="form-name"
          type="text"
          value={name}
          onChange={(e) =>
            dispatch({
              type: SET_NAME_ACTION,
              payload: e.target.value,
            })
          }
        />
        <label className="form-label" htmlFor="form-commet">
          Коментарий:
        </label>
        <textarea
          id="form-commet"
          className="form-comment"
          value={comment}
          onChange={(e) =>
            dispatch({
              type: SET_COMMENT_ACTION,
              payload: e.target.value,
            })
          }
        />
        <label className="form-label" htmlFor="form-rating">
          Оценка:
        </label>
        <ReviewFormCounter
          id="form-rating"
          ref={refCounter}
          onCounterChange={(value) => {
            dispatch({
              type: SET_RATING_ACTION,
              payload: value,
            });
          }}
        />
        <button
          className="form-button"
          disabled={isFormClear(form)}
          onClick={() => {
            dispatch({ type: CLEAR_FORM_ACTION });
            refCounter.current.setCount(0);
          }}
        >
          Очистить
        </button>
      </form>
    </>
  );
};
