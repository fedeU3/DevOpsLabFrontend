import { useContext } from "react";
import { ViewContext } from "../../../contexts/ViewContext/context";

export const useViewContext = () => useContext(ViewContext);