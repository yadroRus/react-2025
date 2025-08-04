import { useState } from "react";
import { useUpdateReviewMutation } from "../../data/services/api/api.js";

export const useCommentEditor = () => {
  const [editMode, setEditMode] = useState(false);
  const [correctedText, setCorrectedText] = useState("");
  const [correctedRating, setCorrectedRating] = useState("");

  const [updateReview] = useUpdateReviewMutation();

  const editCommentHandler = ({ reviewId, text, userId, rating }) => {
    setEditMode(!editMode);
    if (editMode) {
      setCorrectedText(text);
      setCorrectedRating(rating);
      updateReview({
        reviewId,
        review: {
          text,
          userId,
          rating
        }
      });
    }
  };

  return { editMode, editCommentHandler, correctedText, correctedRating };
};