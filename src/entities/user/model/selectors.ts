import { RootState } from "shared/model";

export const selectUser = (state: RootState) => state.auth.user;
