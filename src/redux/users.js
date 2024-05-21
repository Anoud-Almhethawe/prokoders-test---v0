import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { toast } from "react-toastify";

const initialState = {
  loading: false,
  users: [],
  error: "",
  userobj: {},
  usersPerPage: 8,
  currentPage: 1,
};

// Generating Pending, fulfilled, and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await axios.get(
      "https://6633d1dff7d50bbd9b4ac753.mockapi.io/crud"
    );

    const sortedData = response.data.sort((a, b) => b.id - a.id);

    return sortedData;
  } catch (error) {
    toast.error(`Please try again , ${error.message}`);
    throw error;
  }
});
export const getUserById = createAsyncThunk("getUserById", async (id) => {
  try {
    const response = await axios
      .get(`https://6633d1dff7d50bbd9b4ac753.mockapi.io/crud/${id}`)
      .then((response) => response.data);
    return response;
  } catch (error) {
    toast.error(`Please try again , ${error.message}`);
    throw error;
  }
});

export const createUser = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await axios.post(
      "https://6633d1dff7d50bbd9b4ac753.mockapi.io/crud",
      data
    );
    if (response.status === 201 || response.status === 200) {
      toast.success("User Created successfully");
    }
    const result = response.data;
    return result;
  } catch (error) {
    toast.error(`Please try again , ${error.message}`);
    throw error;
  }
});

export const updateUser = createAsyncThunk("updateUser", async (data) => {
  try {
    const response = await axios.put(
      `https://6633d1dff7d50bbd9b4ac753.mockapi.io/crud/${data.id}`,
      data
    );
    if (response.status === 200) {
      toast.success("User Updated successfully");
    }

    const result = response.data;

    return result;
  } catch (error) {
    toast.error(`Please try again , ${error.message}`);
    throw error;
  }
});

export const deleteUser = createAsyncThunk("deleteUser", async (data) => {
  try {
    const response = await axios.delete(
      `https://6633d1dff7d50bbd9b4ac753.mockapi.io/crud/${data.id}`
    );

    const result = response.data;
    return result;
  } catch (error) {
    toast.error(`Please try again , ${error.message}`);
    throw error;
  }
});

const userDetail = createSlice({
  name: "userDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;

      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
      state.error = "";
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;

      if (id) {
        state.users = state.users.filter((user) => user.id !== id);
      }
      state.error = "";
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
    builder.addCase(getUserById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.userobj = action.payload;
      state.error = "";
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;

      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.error = "";
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrev: (state) => {
      state.currentPage--;
    },
  },
});

export const UsersAction = userDetail.actions;
export default userDetail.reducer;
