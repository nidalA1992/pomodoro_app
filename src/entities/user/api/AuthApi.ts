import { gql } from "@apollo/client";

import { client } from "app/models/apollo";
import { wait } from "shared/lib/utils/wait";

export class AuthApi {
  static async signUp(
    username: UserName,
    email: Email,
    password: Password
  ): Promise<Token> {
    const SIGN_UP_USER = gql`
      mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
      }
    `;
    //TODO: починить регистрацию
    console.log(username, email, password);

    const result = await client.mutate({
      mutation: SIGN_UP_USER,
      variables: { email, username, password },
      errorPolicy: "all",
    });

    await wait(2000);

    if (result.errors) {
      const errorCode = result.errors[0].extensions.exception.code;
      throw new Error(errorCode);
    }

    return result.data.signUp as string;
  }
  static async signIn(username: UserName, password: Password): Promise<Token> {
    const SIGN_IN_USER = gql`
      mutation signIn($username: String!, $password: String!) {
        signIn(username: $username, password: $password)
      }
    `;

    const result = await client.mutate({
      mutation: SIGN_IN_USER,
      variables: { username, password },
      errorPolicy: "all",
    });

    await wait(2000);

    if (result?.errors) {
      const errorCode = result.errors[0].extensions.code;
      throw new Error(errorCode);
    }

    console.log(result);

    return result.data.signIn as string;
  }
}
