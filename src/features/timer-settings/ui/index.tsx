import React, { useState } from "react";

import { Modal } from "shared/ui";
import { IconButton } from "shared/ui/buttons";

import { GearIcon } from "./icons/gear-icon";
import { FormSettings } from "./form-settings";
import { AnimatePresence } from "framer-motion";

export const TimerSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <IconButton icon={<GearIcon />} onClick={handleClick} />

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
