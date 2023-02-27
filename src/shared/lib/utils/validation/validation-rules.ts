interface IValidation {
  errorMessage: string;
  isValid: (value: any) => boolean;
}

export const validationRules = (type: string): IValidation => {
  switch (type) {
    case "username":
      return {
        errorMessage: "",
        isValid(value: string): boolean {
          if (value.length < 1) {
            this.errorMessage = "*Введите логин!";
            return false;
          }
          if (/[а-я]/gi.test(value)) {
            this.errorMessage =
              "*Логин может содержать только латинские символы!";
            return false;
          }
          if (value.length < 4) {
            this.errorMessage = "*Логин не может быть короче 4-х символов!";
            return false;
          }
          return true;
        },
      };
    case "email":
      return {
        errorMessage: "",
        isValid(value: string): boolean {
          if (value.length < 1) {
            this.errorMessage = "*Введите Email";
            return false;
          }
          if (!/^\D\S+@([-a-z]+\.{1,2}[-a-z]{2,})$/giu.test(value)) {
            this.errorMessage = "*Неверный формат E-mail!";
            return false;
          }
          return true;
        },
      };
    case "password":
      return {
        errorMessage: "",
        isValid(value: string): boolean {
          if (value.length < 1) {
            this.errorMessage = "*Введите пароль!";
            return false;
          }
          if (value.length < 5) {
            this.errorMessage =
              "*Пароль не может быть содержать менее 5 символов!";
            return false;
          }
          if (/[а-я]/gi.test(value)) {
            this.errorMessage =
              "*Пароль может содержать только латинские символы!";
            return false;
          }
          if (!/[A-Z]+/g.test(value)) {
            this.errorMessage =
              "*Пароль должен содержать как минимум одну заглавную букву!";
            return false;
          }
          if (!/\d+/g.test(value)) {
            this.errorMessage =
              "*Пароль должен содержать как минимум одну цифру!";
            return false;
          }
          if (!/[a-z]+/g.test(value)) {
            this.errorMessage =
              "*Пароль должен содержать как минимум одну строчную букву!";
            return false;
          }
          return true;
        },
      };
    case "task":
      return {
        errorMessage: "",
        isValid(value: string): boolean {
          if (value.length < 1) {
            this.errorMessage = "Текст задачи пуст!";
            return false;
          }
          return true;
        },
      };
    default:
      return {} as IValidation;
  }
};
