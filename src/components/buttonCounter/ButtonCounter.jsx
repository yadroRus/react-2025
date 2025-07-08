import {useCounter} from "./helpers.js";
import './button-counter.css'

function ButtonCounter({max, min}) {
    const [count, increment, decrement] = useCounter(0);
    return (
        <div className='btn-counter'>
            <button className='btn-counter__button' onClick={() => decrement(min)}>-</button>
            {count}
            <button className='btn-counter__button' onClick={() => increment(max)}>+</button>
        </div>
    )
}

export default ButtonCounter;