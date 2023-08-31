const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  loading: false,
  users: [],
  error: undefined,
};

const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return (
    axios
      .get("https://jsonplaceholders.typicode.com/users")
      //   .get("https://jsonplaceholder.typicode.com/user")
      .then((response) => response.data.map((user) => user.id))
  );
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
