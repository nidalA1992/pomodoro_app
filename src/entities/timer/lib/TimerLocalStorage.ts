import { Errors } from "shared/model/enums";

import { ITimerOptions } from "../model/types";

export class TimerLocalStorage {
  static errorMessage = Errors.LOCAL_STORAGE_ERROR;
  static setTimerOptions(options: ITimerOptions) {
    try {
      const serializeTimerOptions = JSON.stringify(options);
      localStorage.setItem("timerOptions", serializeTimerOptions);
    } catch (e) {
      alert(this.errorMessage);
    }
    return this;
  }
  static getTimerOptions(): ITimerOptions | null {
    try {
      const serializedTimerOptions = localStorage.getItem("timerOptions");
      if (serializedTimerOptions) {
        return JSON.parse(serializedTimerOptions);
      }
      return null;
    } catch (e) {
      alert(this.errorMessage);
      return null;
    }
  }
}
