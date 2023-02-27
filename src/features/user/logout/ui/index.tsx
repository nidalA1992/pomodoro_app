import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Modal } from "shared/ui";

import { ExitConfirm } from "./exit-confirm";
import { useAppDispatch } from "shared/lib";
import { signOut } from "entities/user";
import { PrimaryButton } from "shared/ui/buttons";

export const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const callbacks = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    confirm: useCallback(() => {
      dispatch(signOut());
      history.push("/");
    }, []),
  };

  return (
    <>
      <PrimaryButton onClick={callbacks.open}>Выход</PrimaryButton>
      {isOpen && (
        <Modal close={callbacks.close}>
          <ExitConfirm close={callbacks.close} confirm={callbacks.confirm} />
        </Modal>
      )}
    </>
  );
};
