import './restaurant-comment.css';

function RestaurantComment({author, comment, rating}) {
    return (
        <li className='restaurant-comment'>
            <span className='restaurant-comment__head'>
              {author} - {rating}
            </span>
            {comment}
        </li>
    )
}

export default RestaurantComment;