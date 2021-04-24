import {NextRouter} from "next/router";
import React from "react";
import {BrowserRouter, StaticRouter} from "react-router-dom";

export interface HybridRouterProps {
    router: NextRouter;
}
const inBrowser = typeof window !== "undefined";

export const HybridRouter: React.FunctionComponent<HybridRouterProps> = inBrowser
    ? ({children}) => <BrowserRouter>{children}</BrowserRouter>
    : ({children, router}) => (
          <StaticRouter location={router}>{children}</StaticRouter>
      );
