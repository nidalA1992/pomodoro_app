import React, { memo } from "react";
import type { EventHandler, ReactNode, SyntheticEvent } from "react";

import DropdownIcon from "features/task/task-dropdown/ui/icons/dropdown-icon";
import { Button } from "shared/ui";

import s from "./styles.module.scss";

export interface ITaskItemProps {
  content: string;
  amount: number;
  openMenu: EventHandler<SyntheticEvent<HTMLButtonElement>>;
  children: ReactNode;
  menuIsOpen: boolean;
  isActive: boolean;
  editMode: boolean;
  handleClick: EventHandler<SyntheticEvent>;
  doneEditMode: EventHandler<SyntheticEvent<HTMLButtonElement>>;
}

export const TaskItem = (props: ITaskItemProps) => {
  const {
    content,
    amount,
    children,
    menuIsOpen,
    isActive,
    openMenu,
    handleClick,
    editMode,
    doneEditMode,
  } = props;

  return (
    <div
      className={s.task + ` ${isActive ? s.active : ""}`}
      onClick={handleClick}
    >
      <div className={s.amount}>{amount}</div>
      <p className={s.content}>
        {content}
        {children}
      </p>
      {editMode ? (
        <Button className="done-edit" onClick={doneEditMode}>
          ✔
        </Button>
      ) : (
        <Button
          className={`dropdown-button`}
          isActive={menuIsOpen}
          onClick={(e) => openMenu(e)}
        >
          <DropdownIcon />
        </Button>
      )}
    </div>
  );
};
