import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext/context";

export const useAuthContext = () => useContext(AuthContext);