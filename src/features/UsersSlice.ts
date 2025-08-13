import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApiClient } from "../helpers/axiosApiClient";

export interface IUser {
  id: number;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface UserState {
  users: IUser[];
  user: IUser | null;
  error: Error | null;
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  user: null,
  error: null,
  loading: false,
};

export const getUsers = createAsyncThunk<IUser[]>("users/getAll", async () => {
  try {
    const response = await axiosApiClient.get("/");
    return response.data;
  } catch (error) {
    console.error("Error getting all users data", error);
    throw error;
  }
});

export const getUserById = createAsyncThunk<IUser, number>(
  "users/getById",
  async (userId) => {
    try {
      const response = await axiosApiClient.get(`/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error getting current users data", error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as Error;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as Error;
      });
  },
});

export const userReducer = userSlice.reducer;
