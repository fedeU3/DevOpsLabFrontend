import { createContext } from "react";
import { initialContextValue } from "./constants/initialValues";
import type { ViewContextType } from ".";

export const ViewContext = createContext<ViewContextType>(initialContextValue);
