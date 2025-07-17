import { Counter } from "../counter/counter.jsx";
import { useForm } from "./use-form.js";
import styles from "./review-form.module.css";
import classNames from "classnames";
import { memo } from "react";

const isFormClear = (form) => {
  return !Object.values(form).find((value) => !!value);
};

export const ReviewForm = memo(() => {
  const { form, setName, setComment, incrementRating, decrementRating, clear } =
    useForm();

  const { name, comment, rating } = form;

  return (
    <>
      <h3>Добавить отзыв</h3>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label} htmlFor="form-name">
          Имя:
        </label>
        <input
          id="form-name"
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className={styles.label} htmlFor="form-commet">
          Коментарий:
        </label>
        <textarea
          id="form-commet"
          className={styles.comment}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <label className={styles.label} htmlFor="form-rating">
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
          className={classNames(styles.button, {
            [styles.buttonDisabled]: isFormClear(form),
          })}
          onClick={() => clear()}
        >
          очистить
        </button>
      </form>
    </>
  );
});
