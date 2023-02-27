import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Modal } from "shared/ui";
import { MenuButton } from "shared/ui/buttons";
import { GearIcon } from "shared/ui/icons";

import { FormSettings } from "./form-settings";

export const TimerSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <MenuButton icon={<GearIcon />} onClick={handleClick} />

      <AnimatePresence>
        {isOpen && (
          <Modal close={() => setIsOpen(false)}>
            <FormSettings />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
