import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { duplication } from "./util";

export interface ITags {
  tags: string[];
}

const initialState: ITags = {
  tags: [],
};

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
});

export const { ToggleTag, removeTag } = tagsReducer.actions;
export default tagsReducer;
