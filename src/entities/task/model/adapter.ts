import { createEntityAdapter } from "@reduxjs/toolkit";

import { ITask } from "./types";

export const taskAdapter = createEntityAdapter<ITask>({
  sortComparer: (a, b) => {
    const dateA = a.createdAt;
    const dateB = b.createdAt;
    if (!dateA || !dateB) {
      return 0;
    }
    return dateB.localeCompare(dateA);
  },
});
