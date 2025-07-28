import RestaurantMenuItem from "../../components/restaurant-menu-item/restaurant-menu-item.jsx";
import {  useSearchParams } from "react-router";

export const DishPage = ({ dishId, name, price, ingredients }) => {
  const [searchParams] = useSearchParams();
  return (
    <>
      <h1>Блюдо ресторана {searchParams.get("restaurantName")}</h1>

      {/* картинки для демонстрации, поэтому style)  */}
      <div style={{ display: "flex" }}>
        <img loading="lazy" src="https://cache3.youla.io/files/images/720_720_out/5d/da/5dda5d6527a9abdfd8115784.jpg" alt="порося"
             width="200" />
        <img loading="lazy"
             src="https://avatars.mds.yandex.net/i?id=57ade5ef5dadeb6215933e768b8ea874_l-16403192-images-thumbs&n=13"
             alt="порося" width="200" />
      </div>

      <RestaurantMenuItem
        dishId={dishId}
        name={name}
        price={price}
        ingredients={ingredients}
      />
    </>
  );
};