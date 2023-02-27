import { FetchStatus, FormField } from "shared/model";

export interface IAuthState {
  user: UserName;
  status: FetchStatus;
  error: string;
}

export interface IUserData {
  username: UserName;
  email: Email;
  password: Password;
}

export interface IAuthData {
  username: FormField;
  email: FormField;
  password: FormField;
  isDisabled: FormField;
}
