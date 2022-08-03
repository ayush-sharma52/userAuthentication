import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
// import { Component } from "react";
// import { Connect } from "react-redux/es/exports";

const Counter = () => {
  //this will get the state of the store provided in provider tag
  //now that we use the state of the store to it ,it will automatically get subscribed to store
  const counter = useSelector((state) => state.Counter.counter);
  const showCounter = useSelector((state) => state.Counter.showCounter);

  //this will call the dispatch() of the store provided in provider
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({type:'Increment'});
    dispatch(counterActions.Increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.Decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.Increase(5));  // { type : SOME_UNIQUE_IDENTIFIER, payload : 10}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.Toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };
//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   toggleCounterHandler = () => {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStatetoProps = (state) => {
//   return {
//     counter: state.counter,//this will provide this property as a prop to the couter class provides as argument below
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "Increment" }),//same thing (will convert them to props)
//     decrement: () => dispatch({ type: "Decrement" }),
//   };
// };

// //connect here acts as both useSelector and useDispatch hence provide required arguments to these functions
// export default connect(mapStatetoProps, mapDispatchToProps)(Counter);
