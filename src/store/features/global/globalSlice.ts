import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface GlobalState {
  layout: "grid" | "list";
  panel: "chat" | "participants" | "none";
  showUploadModel: boolean;
}

const initialState: GlobalState = {
  layout: "grid",
  panel: "none",
  showUploadModel: false,
};

export const globalSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    handleVideolayout: (state, action: PayloadAction<"grid" | "list">) => {
      state.layout = action.payload;
    },
    handleShowPanel: (
      state,
      action: PayloadAction<"chat" | "participants" | "none">
    ) => {
      state.panel = action.payload;
    },
    handleShowUploadModel: (state, action: PayloadAction<boolean>) => {
      state.showUploadModel = action.payload;
    },
  },
});

export const globalActions = globalSlice.actions;

export const selectLayout = (state: RootState) => state.global.layout;
export const selectpanel = (state: RootState) => state.global.panel;
export const selectShowUploadModel = (state: RootState) =>
  state.global.showUploadModel;

export const globalReducer = globalSlice.reducer;
