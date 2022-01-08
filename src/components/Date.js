import React from 'react'
import { useSelector } from 'react-redux'
import rightarrow from '../assets/right.png'
import right from '../assets/arrow.png'
import leftarrow from '../assets/leftarrow.png'
import left from '../assets/left.png'
import { decrement_month, decrement_year, increment_month, increment_year } from '../actions'

import { useDispatch } from 'react-redux'

function Date() {
    const date = useSelector(state => state.date)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    console.log(date.date)
    const dispatch = useDispatch()
    return (
        <div>
            <h4>
                <img src={left} width="25px" onClick={()=>dispatch(decrement_year())} style={{cursor:"pointer"}} alt='text'/>
                &nbsp;&nbsp;&nbsp; 
                <img src={leftarrow} width="25px" onClick={()=>dispatch(decrement_month())} style={{cursor:"pointer"}} alt='text'/>
                &nbsp;&nbsp;&nbsp;
                {months[date.month - 1] + "  "}&nbsp;&nbsp;{date.year}
                &nbsp;&nbsp;&nbsp;
                <img src={right} width="25px" onClick={()=>dispatch(increment_month())} style={{cursor:"pointer"}} alt='text'/>
                &nbsp;&nbsp;&nbsp; 
                <img src={rightarrow} width="25px" onClick={()=>dispatch(increment_year())} style={{cursor:"pointer"}} alt='text'/></h4>
        </div>
    )
}

export default Date
