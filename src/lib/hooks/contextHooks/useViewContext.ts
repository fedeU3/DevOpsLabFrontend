import { useContext } from "react";
import { ViewContext } from "../../../contexts/ViewContext";

export const useViewContext = () => useContext(ViewContext);