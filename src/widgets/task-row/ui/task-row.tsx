import React, { useCallback, useReducer } from "react";

import {
  selectActiveTaskId,
  selectTaskById,
  fetchEditTask,
  fetchDeleteTask,
  setActiveTask,
} from "entities/task";
import { EditTaskInput } from "features/task/edit-task";
import { TaskDropdown } from "features/task/task-dropdown";
import type { Position, ICallbacks } from "features/task/task-dropdown";
import {
  useAppDispatch,
  useAppSelector,
  useCallDelay,
  getPosition,
} from "shared/lib";

import { prepareDate } from "../lib/utils/prepare-data";
import {
  decrease,
  increase,
  open,
  close,
  openEditMode,
  closeEditMode,
  edit,
  setPosition,
} from "../lib/utils/action-creators";
import { ITaskRowProps } from "../model/types";
import { reducer } from "../lib/utils/task-form-reducer";
import { TaskItem } from "./task-item";

export const TaskRow = ({ id }: ITaskRowProps) => {
  const task = useAppSelector(selectTaskById(id));
  const activeTaskId = useAppSelector(selectActiveTaskId);

  const initialState = {
    amount: task?.amount || 0,
    content: task?.content || "",
    position: {} as Position,
    menuIsOpen: false,
    editMode: false,
  };

  const [state, stateDispatch] = useReducer(reducer, initialState);
  const appDispatch = useAppDispatch();
  const refButton = React.useRef<HTMLDivElement>(null);

  useCallDelay(
    () =>
      appDispatch(fetchEditTask(prepareDate(id, state.content, state.amount))),
    500,
    [state.amount]
  );

  // обработчики для выпадающего меню
  const callbacks: ICallbacks = {
    increaseTask: useCallback(() => stateDispatch(increase()), []),
    decreaseTask: useCallback(() => stateDispatch(decrease()), []),
    closeEditMode: useCallback(() => stateDispatch(openEditMode()), []),
    deleteTask: useCallback(() => appDispatch(fetchDeleteTask(id)), []),
    toggleMenu: useCallback(
      (e) => {
        const button = e.currentTarget;
        //обработчик клика вне меню
        function handleClickOutside({ target }: MouseEvent) {
          console.log("event");
          if (
            target instanceof Node &&
            refButton.current &&
            refButton?.current.contains(target)
          ) {
            return;
          }
          stateDispatch(close());
          document.removeEventListener("click", handleClickOutside);
        }
        // если открыто - закрыть
        if (
          state.menuIsOpen &&
          e.target instanceof Node &&
          button.contains(e.target)
        ) {
          stateDispatch(close());
        } else {
          // иначе открыть
          stateDispatch(open());
          stateDispatch(setPosition(getPosition(button)));
          //обработчик закрывающий меню если клик вне текущего элемента таймаут чтоб отложить событие до след событийного цикла, иначе событие срабатывает тут же
          setTimeout(() => {
            document.addEventListener("click", handleClickOutside);
          }, 0);
        }
      },
      [state, refButton.current]
    ),
  };

  if (!task) return null;

  function doneEditMode() {
    stateDispatch(closeEditMode());
    appDispatch(fetchEditTask(prepareDate(id, state.content, state.amount)));
  }

  return (
    <>
      <TaskItem
        content={state.content}
        amount={state.amount}
        openMenu={callbacks.toggleMenu}
        menuIsOpen={state.menuIsOpen}
        editMode={state.editMode}
        doneEditMode={doneEditMode}
        isActive={activeTaskId === task.id}
        handleClick={() => appDispatch(setActiveTask(id))}
      >
        <EditTaskInput
          value={state.content}
          onChange={(payload: string) => stateDispatch(edit(payload))}
          isEditMode={state.editMode}
          doneEditMode={doneEditMode}
        />
      </TaskItem>
      {state.menuIsOpen && (
        <TaskDropdown
          isDisable={state.amount <= 1}
          pos={state.position}
          cb={callbacks}
          ref={refButton}
        />
      )}
    </>
  );
};
