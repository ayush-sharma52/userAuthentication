// const redux = require("redux");
//now itself will integrate redux no need to call seperately
import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./auth";
import { counterReducers } from "./counter";

const store = configureStore({
  //more slices more reducer()'s then we will pass all reducers in a object and store will connect to all slices
  reducer: {
    Counter: counterReducers,
    Auth: AuthReducers,
  },
});
// const counterStore = redux.createStore(counterReducer);//here we made the store to store states(in a state object)

//this is a subscriber() which will be called everytime when store states changes
// function counterSubscriber() {
//   const latestState = counterStore.getState();
//   console.log(latestState);
// }

//here we subscribed this function(component) to store
// counterStore.subscribe(counterSubscriber);

function storeSubscriber() {
  //this is a subscriber() which will be called everytime when store states changes
  const latestState = store.getState();
  console.log(latestState.Counter.counter, latestState.Counter.showCounter);
}
//here we subscribed this function(component) to store
store.subscribe(storeSubscriber);

export default store;
