import { baseAxios } from "@/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  userId: string;
  userPwd: string;
  auth: {
    loading:
      | "pending"
      | "authenticated"
      | "Unauthenticated"
      | "reject"
      | "idle";
    token: string | null;
  };
}
interface changeStatePayload {
  type: "userId" | "userPwd";
  value: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IResLogin {
  message: string[];
  result: {
    access_token: string;
  };
  statusCode: number;
}

export const adminLogin = createAsyncThunk(
  "login/admin",
  async ({ email, password }: ILogin, { rejectWithValue }) => {
    const login: ILogin = {
      email,
      password,
    };
    try {
      const res = await baseAxios.post("login", login);
      return res.data as IResLogin;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState: loginState = {
  userId: "",
  userPwd: "",
  auth: {
    loading: "idle",
    token: null,
  },
};

const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeState: (state, { payload }: PayloadAction<changeStatePayload>) => {
      state[payload.type] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.auth.loading = "pending";
        state.auth.token = null;
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        if (payload.message[0] !== "failed") {
          state.auth.loading = "authenticated";
          state.auth.token = payload.result.access_token;
        } else {
          state.auth.loading = "Unauthenticated";
          state.auth.token = null;
        }
      })
      .addCase(adminLogin.rejected, (state, { payload }) => {
        state.auth.loading = "reject";
        console.log(payload);
      });
  },
});

export const { changeState } = loginReducer.actions;
export default loginReducer;
