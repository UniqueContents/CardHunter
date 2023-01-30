import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

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
    AddTag: () => {},
    removeTag: () => {},
  },
});

export const { AddTag, removeTag } = tagsReducer.actions;
export default tagsReducer;
