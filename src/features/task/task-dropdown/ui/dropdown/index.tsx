import React, { forwardRef } from "react";

import { Button } from "shared/ui";

import DecreaseIcon from "../icons/decrease-icon";
import DeleteIcon from "../icons/delete-icon";
import EditIcon from "../icons/edit-icon";
import IncreaseIcon from "../icons/increase-icon";
import type { ITaskDropDownProps } from "../../models/types";

import s from "./styles.module.scss";

export const TaskDropdown = forwardRef<HTMLDivElement, ITaskDropDownProps>(
  (props, ref) => {
    const { pos, cb, isDisable } = props;

    return (
      <div
        className={s.wrapper}
        style={{ top: pos.top + 50, left: pos.left - 61 }}
        ref={ref}
      >
        <Button className={"dropdown-menu-buttons"} onClick={cb.increaseTask}>
          <IncreaseIcon />
          Увеличить
        </Button>
        <Button
          className={"dropdown-menu-buttons"}
          onClick={cb.decreaseTask}
          disabled={isDisable}
        >
          <DecreaseIcon />
          Уменьшить
        </Button>
        <Button className={"dropdown-menu-buttons"} onClick={cb.closeEditMode}>
          <EditIcon />
          Редактировать
        </Button>
        <Button className={"dropdown-menu-buttons"} onClick={cb.deleteTask}>
          <DeleteIcon />
          Удалить
        </Button>
      </div>
    );
  }
);
