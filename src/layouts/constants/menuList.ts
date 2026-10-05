import { Logout, Home, Group, MenuBook, Person, Event } from '@mui/icons-material'
import { MenuItem, MenuList } from '../types/MenuList'

export const menuList: MenuList = {
  top: [
    { label: 'Home', path: '/', Icon: Home},
    { label: 'Usuarios', path: '/usuarios', Icon: Group},
    { label: 'Books', path: '/books', Icon: MenuBook},
    { label: 'Mi perfil', path: '/perfil', Icon: Person},
    { label: 'Mis turnos', path: '/mis-turnos', Icon: Event},
  ],
  bottom: [
    { label: 'Log Out', path: '/logout', Icon: Logout },
  ],
}

export const menuListMap: Record<string, MenuItem> = menuList.top.reduce((acc, item) => ({ ...acc, [item.path]: item }), {})