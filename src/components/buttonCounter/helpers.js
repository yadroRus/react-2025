import React from "react";

export const useCounter = (initialState) => {
    const [count, setCount] = React.useState(initialState);

    const increment = (max) => {
        (max === undefined || count < max) && setCount(count + 1);
    }

    const decrement = (min) => {
        (min === undefined || count > min) && setCount(count - 1);
    }
    return [
        count,
        increment,
        decrement
    ]
}
