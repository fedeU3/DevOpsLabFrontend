import { Logout, Home, Group, MenuBook } from '@mui/icons-material'
import { MenuItem, MenuList } from '../types/MenuList'

export const menuList: MenuList = {
  top: [
    { label: 'Home', path: '/', Icon: Home},
    { label: 'Miembros', path: '/miembros', Icon: Group},
    { label: 'Books', path: '/books', Icon: MenuBook},
    { label: 'Usuario', path: '/usuario', Icon: MenuBook},
    { label: 'MisPedidos', path: '/MisPedidos', Icon: MenuBook},
  ],
  bottom: [
    { label: 'Log Out', path: '/logout', Icon: Logout },
  ],
}

export const menuListMap: Record<string, MenuItem> = menuList.top.reduce((acc, item) => ({ ...acc, [item.path]: item }), {})