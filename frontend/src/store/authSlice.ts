import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Role = "patient" | "gp" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  token?: string; 
}

interface AuthState {
  user: User | null;
}

const storedUser = localStorage.getItem("authUser");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ id?: string; name: string; email: string; role: Role; token?: string }>
    ) => {
      state.user = {
        id: action.payload.id || Date.now().toString(),
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        token: action.payload.token || "mock-token",
      };
      localStorage.setItem("authUser", JSON.stringify(state.user));
    },
    signup: (
      state,
      action: PayloadAction<{ id?: string; name: string; email: string; role: Role; token?: string }>
    ) => {
      state.user = {
        id: action.payload.id || Date.now().toString(),
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        token: action.payload.token || "mock-token",
      };
      localStorage.setItem("authUser", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

// Actions
export const { login, signup, logout } = authSlice.actions;

// Selectors
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  Boolean(state.auth.user);
export const selectRole = (state: { auth: AuthState }) => state.auth.user?.role;

// Reducer
export default authSlice.reducer;
