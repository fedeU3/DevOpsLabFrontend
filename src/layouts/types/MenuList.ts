import { SvgIconComponent } from "@mui/icons-material";

export type MenuItem = {
  label: string;
  path: string;
  Icon: SvgIconComponent; // Assuming your icons are React components, or adjust the type to fit your icons
  adminOnly?: boolean;
  activeOnly?: boolean; 
};                     

export type MenuList = {  
  top: MenuItem[];
  bottom: MenuItem[];
};