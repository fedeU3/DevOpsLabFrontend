import { useAuthContext } from "../../lib/hooks/contextHooks/useAuthContext";

const Logout = () => {
  const { logout } = useAuthContext();
  logout();
  return (
    <div>Logout</div>
  )
}

export default Logout