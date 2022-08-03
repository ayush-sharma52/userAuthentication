import { createSlice } from "@reduxjs/toolkit";

//this is a reducer() which will be called for manipulating the states in the store
//this function is called by components using dispatch method
//also called when the store is initialised

const initialCounterState = { counter: 0, showCounter: true };
// function counterReducer(state = initialCounterState, action) {
//   if (action.type === "Increment")
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   if (action.type === "Decrement")
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   if (action.type === "Increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "Toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// }

const counterSlice = createSlice({
  //here instead of a big state object we create slices of related or dependent states alsoreducer functions shortend
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    //we pass all the reducing functions here in this object
    Increment: (state) => {
      state.counter++; //can mutate the previous state as toolkit  will handle it accordingly
      //no need to again define other states and return a new object as it will merge this to them
    },
    Decrement(state) {
      state.counter--;
    },
    //here when we dispatch this action we will pass another argument which will come here as below
    Increase(state, action) {
      state.counter += action.payload;
    },
    Toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//now in the components which will call dispatch() we don't need to create a object give it type and all by self
// and then pass it instead we will call the function provided in the slice's reducers object as 'counterActions.increment'
// in the dispatch function argument and it will automatically create a required object to call that required ()
export const counterActions = counterSlice.actions;
export const counterReducers = counterSlice.reducer;

