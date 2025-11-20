import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { MembersType } from "../../../types/members";

interface MembersState {
  invitedMembers: MembersType[];
  callType: "provider" | "family";
}

const initialState: MembersState = {
  invitedMembers: [],
  callType: "family",
};

export const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    handleInvitedMembers: (state, action: PayloadAction<MembersType[]>) => {
      state.invitedMembers = action.payload;
    },

    resetState: (state) => {
      state.invitedMembers = [];
    },
  },
});

export const membersActions = membersSlice.actions;

export const selectInvitedMembers = (state: RootState) =>
  state.members.invitedMembers;
export const selectCallType = (state: RootState) => state.members.callType;

export const membersReducer = membersSlice.reducer;
