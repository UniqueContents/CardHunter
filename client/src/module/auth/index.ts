import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  userId: string;
  userPwd: string;
}

interface changeStatePayload {
  type: "userId" | "userPwd";
  value: string;
}

const initialState: loginState = {
  userId: "",
  userPwd: "",
};

const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeState: (state, { payload }: PayloadAction<changeStatePayload>) => {
      state[payload.type] = payload.value;
    },
  },
});

export const { changeState } = loginReducer.actions;
export default loginReducer;
