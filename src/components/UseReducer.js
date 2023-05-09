import React,{useReducer} from 'react'

const reducerFunction = ( state, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return (state+1)
        case 'DECREMENT':
            return (state-1)
        case 'RESET':
            return 0
        default:
            return state
    }
}

const UseReducer = () => {
    let initaialValue = 0;
    const [value, dispatch] = useReducer(reducerFunction,initaialValue);

    const onIncrement = ()=>{
        dispatch({type: 'INCREMENT'})
    }

    const onDecrement = () => {
        dispatch({type: 'DECREMENT'})
    }
    const onReset = () =>{
        dispatch({type: 'RESET'})
    }
  return (
      <>
        <div>Use Reducer Example</div>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col'>
                <button onClick={onIncrement} className='btn btn-primary'>INCREMENT</button>
            </div>
            <div className='col'>
                <h3>{value}</h3>
            </div>
            <div className='col'>
                <button onClick={onDecrement} className='btn btn-secondary'>DECREMENT</button>
            </div>
        </div>
            <button onClick={onReset} className='btn btn-danger'>Reset</button>
      </>
     
  )
}

export default UseReducer