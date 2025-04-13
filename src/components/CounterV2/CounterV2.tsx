import { useCounterStore } from "@/libs/store/zustand/useCounter"
import { OPERATION_COUNTER } from "@/constants/Counter.constants"
import "./counterV2.css"


export const CounterV2 = () => {
  
  const currentCounter = useCounterStore(state => state.currentCounter)
  const setCounter = useCounterStore(state => state.setCounter)
  
  return (
    <>
      <div className="counter">
        <button onClick={() => {setCounter(OPERATION_COUNTER.RESTA)}}>-</button>
        <div className="display">{currentCounter}</div>
        <button onClick={() => {setCounter(OPERATION_COUNTER.SUMA)}}>+</button>
      </div>
    </>
  )
}
