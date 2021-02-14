import React from 'react'
import { connect } from 'react-redux'


function Calculator({ result }) {

     return (
         <div>
             <input type="text" placeholder="a" />
             <input type="text" placeholder="b" />


             <button>somar</button>
             <button>subtrarir</button>

             <div>
                 {result}
             </div>
         </div>
     )
}

function mapStateToProps(state) {
    return { result: state.calculator }
}

export default connect(mapStateToProps)(Calculator)
