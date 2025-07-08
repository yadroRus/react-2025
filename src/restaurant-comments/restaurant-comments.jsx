import RestaurantCommentItem from "../restaurant-comment-item/restaurant-comment-item.jsx";

export default function RestaurantComments({comments}) {
    return comments ? (
        <>
            <h3>Отзывы / Оценки</h3>
            <ul>
                {comments.map(({id, user, text, rating}) => <RestaurantCommentItem key={id}
                                                                                   author={user}
                                                                                   comment={text}
                                                                                   rating={rating}></RestaurantCommentItem>)
                }
            </ul>
        </>) : null;
}