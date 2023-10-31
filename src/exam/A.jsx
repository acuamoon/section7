/* UseState 사용 */
import { useState } from "react";

export default function A() {

    const [count, setCount] = useState(0)

    const onDecrease = () => {
        setCount(count -1);   
    }

    const onIncrease = () => {
        setCount(count + 1);
    }

    return (
    <div>
        <h4>{count}</h4>
        <div>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    </div>)
}