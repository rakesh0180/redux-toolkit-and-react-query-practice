const configureStore = require("@reduxjs/toolkit").configureStore;
const iceCreamReducer = require("../feature/icecream/iceCreamSlice");
const cakeReducer = require("../feature/cake/cakeSlice");
const usersReducer = require("../feature/user/userSlice");
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const { default: logger } = require("redux-logger");
const store = configureStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer, user: usersReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
module.exports = store;
