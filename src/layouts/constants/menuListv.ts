import { Logout, Home, Group, MenuBook, Person, Event } from '@mui/icons-material'
import { MenuItem, MenuList } from '../types/MenuList'

export const menuList: MenuList = {
  top: [
    { label: 'Home', path: '/', Icon: Home, activeOnly: true },
    { label: 'Usuarios', path: '/usuarios', Icon: Group, adminOnly: true, activeOnly: true },
    { label: 'Books', path: '/books', Icon: MenuBook, activeOnly: true },
    { label: 'Mi perfil', path: '/perfil', Icon: Person, activeOnly: true },
    { label: 'Mis turnos', path: '/mis-turnos', Icon: Event, activeOnly: true },
  ],
  bottom: [
    { label: 'Log Out', path: '/logout', Icon: Logout },
  ],
}

export const menuListMap: Record<string, MenuItem> = menuList.top.reduce((acc, item) => ({ ...acc, [item.path]: item }), {})