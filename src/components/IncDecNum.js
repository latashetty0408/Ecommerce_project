import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from '../actions'


const IncDecNum = () => {
    const myState = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch();
  return (
    <>
        <div className='container__InDec'>
            <h1><b>Increment/Decrement counter</b></h1>
            <h4>using React and Redux</h4>
            <div className="quantity">
                <a title='Decrement' onClick={()=> dispatch(decNumber())} className="quantity__minus"><span>-</span></a>
                <input name='quantity' type='text' className='quantity__input' value={myState} />
                <a title='Increment' onClick={()=> dispatch(incNumber(5))} className="quantity__plus"><span>+</span></a>
            </div>
        </div>
    </>
  )
}

export default IncDecNum
