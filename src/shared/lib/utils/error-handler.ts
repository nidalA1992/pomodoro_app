import { Errors } from "../../model/enums";

export const errorHandler = (error: any) => {
  switch (error.message) {
    case "UNAUTHENTICATED":
      return Errors.UNAUTHENTICATED;
    case "11000":
      return Errors.USER_NOT_EXIST;
    case "TASK_CREATED_ERROR":
      return Errors.TASK_CREATE_ERROR;
    case "TASK_UPDATED_ERROR":
      return Errors.TASK_UPDATED_ERROR;
    case "DELETED_ERROR":
      return Errors.DELETED_ERROR;
    default:
      return Errors.UNDEFINED_ERROR;
  }
};
