import { Route, Routes } from 'react-router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Books from './pages/Books';
import Miembros from './pages/Miembros';
import Users from './pages/Usuarios';
import Logout from './pages/Logout';
import MyOrders from './pages/MisPedidos';
import CreateOrder from './pages/CrearPedidos';
import { ROUTES } from './lib/constants/routes';
import theme from './theme'; 
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path={ROUTES.home.path} element={<Home />} />
        <Route path={ROUTES.login.path} element={<Login />} />
        <Route path={ROUTES.signup.path} element={<SignUp />} />
        <Route path={ROUTES.books.path} element={<Books />} />
        <Route path={ROUTES.logout.path} element={<Logout />} />
        <Route path={ROUTES.usuarios.path} element={<Users />} />
        <Route path={ROUTES.miembros.path} element={<Miembros />} />
        <Route path={ROUTES.MisPedidos.path} element={<MyOrders />} />
        <Route path={ROUTES.createOrders.path} element={<CreateOrder />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
