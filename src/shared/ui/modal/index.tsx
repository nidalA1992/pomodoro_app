import React, { useCallback, useMemo } from "react";
import type { ReactNode, BaseSyntheticEvent } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import s from "./styles.module.scss";

interface IModalProps {
  children: ReactNode;
  close: VoidFunction;
}

export const Modal = (props: IModalProps) => {
  const handleClick = useCallback((e: BaseSyntheticEvent) => {
    if (e.target?.id === "modal-back") {
      props.close();
    }
  }, []);

  const node = useMemo(() => document.getElementById("modal"), []);
  if (!node) return null;

  return createPortal(
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      className={s.background}
      id="modal-back"
      onClick={handleClick}
    >
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: "100%", opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        {props.children}
      </motion.div>
      <motion.button
        initial={{ rotate: -90 }}
        animate={{ rotate: 0 }}
        transition={{ delay: 0.3 }}
        className={s.closeButton}
        onClick={props.close}
      >
        ✖
      </motion.button>
    </motion.div>,
    node
  );
};
