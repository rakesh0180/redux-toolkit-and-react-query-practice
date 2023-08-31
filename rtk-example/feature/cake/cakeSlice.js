const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCake: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCake--;
    },
    reStocked: (state, action) => {
      state.numberOfCake += action.payload;
    },
  },
});

// module.exports
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
// module.exports = cakeSlice.actions;
// module.exports = { ordered, reStocked } = cakeSlice.actions;
