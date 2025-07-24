import { Button } from "../button/button.jsx";

export const CartClearAllButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} text="Удалить все" style={{ float: "right" }} />
  );
};
