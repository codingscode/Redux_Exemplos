import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum } from '../store/Calculator/Calculator.actions'



function Calculator() {
     const dispatch = useDispatch()
     const result = useSelector((state) => state.calculator)
     const [a, setA] = useState(0)
     const [b, setB] = useState(0)
     

     return (
         <div>
             <input type="text" placeholder="a" value={a} onChange={(evento) => setA(Number(evento.target.value))} />
             <input type="text" placeholder="b" value={b} onChange={(evento) => setB(Number(evento.target.value))} />


             <button onClick={() => { dispatch( sum(a, b) ) }} >somar</button>
             <button>subtrarir</button>

             <div>
                 {result}
             </div>
         </div>
     )
}



export default Calculator
