import React from "react";
import type { EventHandler, ReactNode, SyntheticEvent } from "react";

import { CircleButton, IconButton } from "shared/ui/buttons";
import { DropdownIcon } from "shared/ui/icons";

import s from "./styles.module.scss";

export interface ITaskItemProps {
  content: string;
  amount: number;
  openMenu: EventHandler<SyntheticEvent>;
  children: ReactNode;
  menuIsOpen: boolean;
  isActive: boolean;
  editMode: boolean;
  selectTask: EventHandler<SyntheticEvent>;
  doneEditMode: EventHandler<SyntheticEvent<HTMLButtonElement>>;
}

export const TaskItem = (props: ITaskItemProps) => {
  const {
    content,
    amount,
    children,
    isActive,
    openMenu,
    selectTask,
    editMode,
    doneEditMode,
  } = props;

  const handleClick = (e: SyntheticEvent) => openMenu(e);

  return (
    <div
      className={s.task + ` ${isActive ? s.active : ""}`}
      onClick={selectTask}
    >
      <div className={s.amount}>{amount}</div>
      <p className={s.content}>
        {content}
        {children}
      </p>
      {editMode ? (
        <CircleButton onClick={doneEditMode} size={30}>
          ✔
        </CircleButton>
      ) : (
        <IconButton icon={<DropdownIcon />} onClick={handleClick} />
      )}
    </div>
  );
};
