import { ViewContextType } from "..";

const notImplemented = () => {
  throw new Error("ViewContext: function is not implemented.");
};

export const initialContextValue: ViewContextType = {
  notification: {
    show: notImplemented,
    hide: notImplemented,
  },
  modal: {
    show: notImplemented,
    hide: notImplemented,
  },
};
