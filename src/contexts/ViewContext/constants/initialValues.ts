import { ViewContextType } from "..";

export const initialContextValue: ViewContextType = {
  notification: {
    open: false,
    message: "",
    severity: "info",
  },
  setNotification: () => {
    throw new Error("ViewContext: setNotification function is not implemented.");
  },
};