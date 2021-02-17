import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum } from '../store/Calculator/Calculator.actions'



function Calculator() {
     const dispatch = useDispatch()
     const result = useSelector((state) => state.calculator)

     

     return (
         <div>
             <input type="text" placeholder="a" />
             <input type="text" placeholder="b" />


             <button onClick={() => { dispatch( sum(4, 7) ) }} >somar</button>
             <button>subtrarir</button>

             <div>
                 {result}
             </div>
         </div>
     )
}



export default Calculator
