const store = require("./app/store");
const cakeActions = require("./feature/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./feature/icecream/iceCreamSlice").iceCreamActions;
const fetchUsers = require("./feature/user/userSlice").fetchUsers;
const unsubscribe = store.subscribe(() => {
  console.log("initial state", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.reStocked(3));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.reStocked(3));

store.dispatch(fetchUsers());

unsubscribe();
