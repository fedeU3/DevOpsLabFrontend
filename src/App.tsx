import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Books from './pages/Books';
import Usuarios from './pages/Miembros';
import Perfil from './pages/Usuarios';
import Logout from './pages/Logout';
import MisTurnos from './pages/MisPedidos';
import NuevoTurno from './pages/CrearPedidos';
import { ROUTES } from './lib/constants/routes';
import { useAuthContext } from './lib/hooks/contextHooks/useAuthContext';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext();
  const hasToken = !!localStorage.getItem('token');

  // Sin token: redirigir a login inmediatamente
  if (!hasToken) return <Navigate to={ROUTES.login.path} replace />;

  // Token existe pero el usuario aún no cargó (GET /auth en progreso)
  if (!user) return null;

  return <>{children}</>;
};

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path={ROUTES.login.path} element={<Login />} />
      <Route path={ROUTES.signup.path} element={<SignUp />} />

      {/* Rutas protegidas */}
      <Route path={ROUTES.home.path} element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path={ROUTES.books.path} element={<PrivateRoute><Books /></PrivateRoute>} />
      <Route path={ROUTES.logout.path} element={<PrivateRoute><Logout /></PrivateRoute>} />
      <Route path={ROUTES.usuarios.path} element={<PrivateRoute><Usuarios /></PrivateRoute>} />
      <Route path={ROUTES.perfil.path} element={<PrivateRoute><Perfil /></PrivateRoute>} />
      <Route path={ROUTES.misTurnos.path} element={<PrivateRoute><MisTurnos /></PrivateRoute>} />
      <Route path={ROUTES.nuevoTurno.path} element={<PrivateRoute><NuevoTurno /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
