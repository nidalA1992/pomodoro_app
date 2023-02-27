import React, { forwardRef } from "react";

import { IconButton } from "shared/ui/buttons";

import DecreaseIcon from "../icons/decrease-icon";
import DeleteIcon from "../icons/delete-icon";
import EditIcon from "../icons/edit-icon";
import IncreaseIcon from "../icons/increase-icon";
import type { ITaskDropDownProps } from "../../models/types";

import s from "./styles.module.scss";

export const TaskDropdown = forwardRef<HTMLDivElement, ITaskDropDownProps>(
  (props, ref) => {
    const { pos, cb, isDisable } = props;

    const top = pos.top + 50;
    const left = pos.left - 61;

    return (
      <div className={s.wrapper} style={{ top, left }} ref={ref}>
        <IconButton icon={<IncreaseIcon />} onClick={cb.increaseTask}>
          Увеличить
        </IconButton>
        <IconButton
          disabled={isDisable}
          icon={<DecreaseIcon />}
          onClick={cb.decreaseTask}
        >
          Уменьшить
        </IconButton>
        <IconButton icon={<EditIcon />} onClick={cb.closeEditMode}>
          Редактировать
        </IconButton>
        <IconButton icon={<DeleteIcon />} onClick={cb.deleteTask}>
          Удалить
        </IconButton>
      </div>
    );
  }
);
