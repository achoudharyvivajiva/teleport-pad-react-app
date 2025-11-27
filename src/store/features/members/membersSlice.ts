import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { MembersType } from "../../../types/members";

interface MembersState {
  unInviteMembers: MembersType[];
  invitedMembers: MembersType[];
  callType: "provider" | "family";
}

const initialState: MembersState = {
  unInviteMembers: [],
  invitedMembers: [],
  callType: "family",
};

export const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    handleInvitedMembers: (
      state,
      action: PayloadAction<{
        invitedMembers: MembersType[];
        unInvitedMembers: MembersType[];
      }>
    ) => {
      state.invitedMembers = action.payload.invitedMembers;
      state.unInviteMembers = action.payload.unInvitedMembers;
    },

    resetState: (state) => {
      state.invitedMembers = [];
    },
  },
});

export const membersActions = membersSlice.actions;

export const selectInvitedMembers = (state: RootState) =>
  state.members.invitedMembers;
export const selectUnInvitedMembers = (state: RootState) =>
  state.members.unInviteMembers;
export const selectCallType = (state: RootState) => state.members.callType;

export const membersReducer = membersSlice.reducer;
