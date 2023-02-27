import React, { useState } from "react";

import { Button, Modal } from "shared/ui";
import { GearIcon } from "./icons/gear-icon";
import { FormSettings } from "./form-settings";
import { AnimatePresence } from "framer-motion";

export const TimerSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="settings-button" onClick={() => setIsOpen(true)}>
        <GearIcon />
      </Button>
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
