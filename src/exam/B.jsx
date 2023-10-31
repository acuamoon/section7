/* useRedudex 사용 */

import { useReducer } from "react"

/* 1번째 Param 현재상태, 2번째 Param은 action 객체 */
function reducer(state, action) {
    if(action.type === 'DECREASE') {
        return state - action.data;
    }else if (action.type === "INCREASE") {
        return state + action.data;
    }
}


export default function B() {
    /* 1번째 Param은 Value, 2번째 Param은 상태변화를 촉발시키는 트리거 역할의 함수 (발생만 시킴)  */
    /* useReducer : 1번째 Param은 상태변화가 발생하였는데 실행되는 함수, 2번째 Param은 초기값    */
    const [count, dispatch] = useReducer(reducer,0);

    return (
    <div>
        <h4>{count}</h4>
        <div>
            <button onClick={() => { 
                dispatch({
                    type: "DECREASE",
                    data: 1
                    });
                }}>-1</button>
            <button onClick={() => {
                dispatch({
                    type: "INCREASE",
                    data: 1
                });
            }}>+1</button>
        </div>
    </div>)
}