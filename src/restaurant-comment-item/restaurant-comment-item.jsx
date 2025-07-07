import './restaurant-comment-item.css';

function RestaurantCommentItem({author, comment, rating}) {
    return (
        <li className='restaurant-comment-item'>
            <span className='restaurant-comment-item__head'>
              {author} - {rating}
            </span>
            {comment}
        </li>
    )
}

export default RestaurantCommentItem;