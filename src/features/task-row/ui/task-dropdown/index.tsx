import React, { forwardRef } from "react";

import { MenuButton } from "shared/ui/buttons";
import { DecreaseIcon } from "shared/ui/icons";
import { DeleteIcon } from "shared/ui/icons";
import { EditIcon } from "shared/ui/icons";
import { IncreaseIcon } from "shared/ui/icons";

import { ITaskDropDownProps } from "../../model/types";

import s from "./styles.module.scss";

export const TaskDropdown = forwardRef<HTMLDivElement, ITaskDropDownProps>(
  (props, ref) => {
    const { pos, cb, isDisable } = props;

    const top = pos.top + 50;
    const left = pos.left - 61;

    return (
      <div className={s.wrapper} style={{ top, left }} ref={ref}>
        <MenuButton icon={<IncreaseIcon />} onClick={cb.increaseTask}>
          Увеличить
        </MenuButton>
        <MenuButton
          disabled={isDisable}
          icon={<DecreaseIcon />}
          onClick={cb.decreaseTask}
        >
          Уменьшить
        </MenuButton>
        <MenuButton icon={<EditIcon />} onClick={cb.closeEditMode}>
          Редактировать
        </MenuButton>
        <MenuButton icon={<DeleteIcon />} onClick={cb.deleteTask}>
          Удалить
        </MenuButton>
      </div>
    );
  }
);
