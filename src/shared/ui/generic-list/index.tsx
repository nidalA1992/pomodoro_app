import React, { useMemo } from "react";
import type { JSXElementConstructor } from "react";
import { nanoid } from "@reduxjs/toolkit";

interface IListProps<P> {
  props: P[];
  Element: React.FC<P>;
}

export const GenericList = <E, P extends object | JSXElementConstructor<E>>(
  props: IListProps<P>
) => {
  const items = useMemo(
    () =>
      props.props.map((i) => (
        <li key={nanoid()}>
          <props.Element {...i} />
        </li>
      )),
    [props.props]
  );

  return <ul>{items}</ul>;
};
