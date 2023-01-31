import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { duplication } from "./util";
import axios from "axios";
export interface ITags {
  tags: string[];
  cardInfo: {
    loading: "pending" | "success" | "reject" | "idle";
    payload: string | AxiosError | null;
  };
}

const initialState: ITags = {
  tags: [],
  cardInfo: {
    loading: "idle",
    payload: null,
  },
};

export const getCardInfo = createAsyncThunk(
  "tags/cardInfo",
  async (tags: string[], { rejectWithValue }) => {
    try {
      const res = await axios("someURL");
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const tagsReducer = createSlice({
  name: "tags",
  initialState,
  reducers: {
    ToggleTag: (state, { payload }: PayloadAction<string>) => {
      const newArr = duplication(state.tags, payload);
      state.tags = newArr;
    },
    removeTag: (state, { payload }: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardInfo.pending, (state) => {
        state.cardInfo.loading = "pending";
        state.cardInfo.payload = null;
      })
      .addCase(getCardInfo.fulfilled, (state, { payload }) => {
        state.cardInfo.loading = "success";
        state.cardInfo.payload = payload;
      })
      .addCase(getCardInfo.rejected, (state, { payload }) => {
        state.cardInfo.loading = "reject";
        console.log(payload);
        if (payload instanceof AxiosError) {
          state.cardInfo.payload = payload;
        } else {
          console.log(payload);
        }
      });
  },
});

export const { ToggleTag, removeTag } = tagsReducer.actions;
export default tagsReducer;
