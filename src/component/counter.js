import React, { Component, Fragment } from 'react';
class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset} = this.props;
      return (
         <Fragment>
            <h1>My Counter</h1>
            {/* <div>{counter}</div> */}
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>
         </Fragment>
      );
   }
}
export default Counter;