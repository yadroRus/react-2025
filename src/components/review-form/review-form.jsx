import { Counter } from "../counter/counter.jsx";
import { useForm } from "./use-form.js";
import "./review-form.css";

const isFormClear = (form) => {
  return !Object.values(form).find((value) => !!value);
};

export const ReviewForm = () => {
  const { form, setName, setComment, incrementRating, decrementRating, clear } =
    useForm();

  const { name, comment, rating } = form;

  return (
    <>
      <h3>Добавить отзыв</h3>
      <form className="review-form" onSubmit={(e) => e.preventDefault()}>
        <label className="form-label" htmlFor="form-name">
          Имя:
        </label>
        <input
          id="form-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-label" htmlFor="form-commet">
          Коментарий:
        </label>
        <textarea
          id="form-commet"
          className="form-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <label className="form-label" htmlFor="form-rating">
          Оценка:
        </label>

        <Counter
          id="form-rating"
          value={rating}
          increment={incrementRating}
          decrement={decrementRating}
          decrementDisabled={rating <= 0}
          incrementDisabled={rating >= 5}
        />

        <button
          className="form-button"
          disabled={isFormClear(form)}
          onClick={() => clear()}
        >
          Очистить
        </button>
      </form>
    </>
  );
};
