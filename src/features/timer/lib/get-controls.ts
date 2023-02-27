import { TimerStatus } from "../model/types";

export const getControls = (
  status: TimerStatus,
  setStatus: (status: TimerStatus) => void
) => {
  let activateButton;
  let deactivateButton;
  let handleActivateButton = () => {};
  let handleDeactivateButton = () => {};

  switch (status) {
    case "idle":
      activateButton = "Старт";
      handleActivateButton = () => setStatus("process");
      deactivateButton = "Стоп";
      break;
    case "process":
      activateButton = "Пауза";
      handleActivateButton = () => setStatus("process-pause");
      deactivateButton = "Стоп";
      handleDeactivateButton = () => {
        setStatus("idle");
      };
      break;
    case "process-pause":
      activateButton = "Продолжить";
      handleActivateButton = () => setStatus("process");
      deactivateButton = "Сделано";
      handleDeactivateButton = () => {
        //TODO: TASK DONE
        setStatus("idle");
      };
      break;
    case "break":
      deactivateButton = "Пауза";
      activateButton = "Пропустить";
      break;
    case "break-pause":
      deactivateButton = "Продолжить";
      activateButton = "Пропустить";
      break;
  }

  return {
    activateButton,
    deactivateButton,
    handleActivateButton,
    handleDeactivateButton,
  };
};
