import { Errors } from "shared/model";

export class AuthLocalStorage {
  private static errorText = Errors.LOCAL_STORAGE_ERROR;

  static setUser(username: UserName) {
    try {
      localStorage.setItem("user", username);
    } catch (e) {
      alert(this.errorText);
    }
    return this;
  }

  static setToken(token: Token) {
    try {
      localStorage.setItem("token", token);
    } catch (e) {
      alert(this.errorText);
    }
    return this;
  }

  static getToken(): Token | null {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        return token;
      }
      return null;
    } catch (e) {
      alert(this.errorText);
      return null;
    }
  }

  static getUser(): UserName | null {
    try {
      const username = localStorage.getItem("user");
      if (username) {
        return username;
      }
      return null;
    } catch (e) {
      alert(this.errorText);
      return null;
    }
  }

  static removeAuthData() {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (e) {
      alert(this.errorText);
    }
    return this;
  }
}
