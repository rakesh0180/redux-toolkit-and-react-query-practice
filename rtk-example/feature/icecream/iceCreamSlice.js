const { cakeActions } = require("../cake/cakeSlice");
const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numberOfIceCream: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCream--;
    },
    reStocked: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numberOfIceCream--;
  //     },
  //   },
  extraReducers: (builder) => {
    //takes cakeActions, state
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numberOfIceCream--;
    });
  },
});
module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;

// module.exports = cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;
