import { SvgIconComponent } from "@mui/icons-material"
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from "react-router"

type MenuItemProps = {
  expanded: boolean,
  label: string,
  path: string,
  Icon: SvgIconComponent
}

export const MenuItem: React.FC<MenuItemProps> = ({
  expanded,
  label,
  path,
  Icon,
})=>{
  const navigate = useNavigate();
  const goTo = (path: string) => () => navigate(path);
  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={[
          {
            minHeight: 48,
            px: 2.5,
          },
          expanded
            ? {
                justifyContent: 'initial',
              }
            : {
                justifyContent: 'center',
              },
        ]}
        onClick={goTo(path)}
      >
        <ListItemIcon
          sx={[
            {
              minWidth: 0,
              justifyContent: 'center',
            },
            expanded
              ? {
                  mr: 3,
                }
              : {
                  mr: 'auto',
                },
          ]}
        >
          <Icon/>
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={[
            expanded
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                },
          ]}
        />
      </ListItemButton>
    </ListItem>
  )
}