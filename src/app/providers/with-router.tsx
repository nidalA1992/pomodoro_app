import React, { Suspense } from "react";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { LoadingFallback } from "../../features/loading-fallback";

export const withRouter = (component: () => ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>{component()}</Suspense>
    </BrowserRouter>
  );
