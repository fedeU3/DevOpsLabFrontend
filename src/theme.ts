// ═══════════════════════════════════════════════════════════════
//  CLERKIVA · src/theme.ts — Estilo "Slate Ops"
//
//  ✏️  PARA CAMBIAR COLORES: modificá SOLO la sección "TOKENS"
//      al inicio de este archivo. El resto se actualiza solo.
// ═══════════════════════════════════════════════════════════════

import { createTheme } from "@mui/material/styles";

// ───────────────────────────────────────────────────────────────
//  TOKENS DE COLOR
//  Editá estos valores para cambiar la apariencia de toda la app
// ───────────────────────────────────────────────────────────────

export const colorTokens = {

  // ── SIDEBAR ────────────────────────────────────────────────
  sidebar: {
    background: '#0F172A',   // fondo del drawer/sidebar
    activeItem: '#1E293B',   // fondo del ítem activo
    activeAccent: '#4F46E5',   // borde izquierdo del ítem activo
    text: '#FFFFFF',   // texto/íconos inactivos
    textActive: '#FFFFFF',   // texto/íconos activos
    textHover: '#FFFFFF',   // texto/íconos en hover
    itemHoverBg: '#1E293B',   // fondo en hover
    logo: '#4F46E5',   // color del logo/brand
    divider: '#1E293B',   // borde derecho del sidebar
    border: '#1E293B',   // borde separador lateral
  },

  // ── TOPBAR / APPBAR ────────────────────────────────────────
  topbar: {
    background: '#FFFFFF',
    border: '#E2E8F0',
    text: '#64748B',
    badgeBg: '#EEF2FF',
    badgeText: '#4F46E5',
  },

  // ── PÁGINA ─────────────────────────────────────────────────
  page: {
    background: '#F8FAFC',   // fondo global (reemplaza #F0F1F3)
    surface: '#FFFFFF',   // cards, paper, drawer
    border: '#E2E8F0',
    borderLight: '#F1F5F9',
  },

  // ── TEXTO ──────────────────────────────────────────────────
  text: {
    primary: '#1E293B',   // reemplaza #5D6679
    secondary: '#64748B',
    muted: '#94A3B8',
    disabled: '#CBD5E1',
    onDark: '#FFFFFF',
  },

  // ── PRIMARY — acciones principales ────────────────────────
  primary: {
    main: '#4F46E5',   // reemplaza #1366D9
    dark: '#4338CA',
    light: '#EEF2FF',
    mid: '#C7D2FE',
    contrast: '#FFFFFF',
  },

  // ── SUCCESS — ingresos, ventas, caja abierta ───────────────
  success: {
    main: '#16A34A',
    dark: '#15803D',
    light: '#DCFCE7',
    mid: '#86EFAC',
    contrast: '#FFFFFF',
  },

  // ── ERROR — caja cerrada, stock 0, faltantes ──────────────
  error: {
    main: '#DC2626',
    dark: '#B91C1C',
    light: '#FEE2E2',
    mid: '#FECACA',
    contrast: '#FFFFFF',
  },

  // ── WARNING — stock bajo, alertas ─────────────────────────
  warning: {
    main: '#D97706',
    dark: '#B45309',
    light: '#FEF3C7',
    mid: '#FDE68A',
    contrast: '#FFFFFF',
  },

  // ── INFO — efectivo en caja, datos generales ──────────────
  info: {
    main: '#0284C7',
    dark: '#0369A1',
    light: '#E0F2FE',
    mid: '#BAE6FD',
    contrast: '#FFFFFF',
  },

  // ── GRISES ────────────────────────────────────────────────
  grey: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },

} as const;

// ───────────────────────────────────────────────────────────────
//  TOKENS SEMÁNTICOS DE NEGOCIO
//  Usá estos en los componentes para colorear por estado/tipo
// ───────────────────────────────────────────────────────────────

export const semanticTokens = {

  // Estados del negocio
  business: {
    cajaAbierta: colorTokens.success.main,
    cajaCerrada: colorTokens.error.main,
    stockCritico: colorTokens.error.main,
    stockBajo: colorTokens.warning.main,
    stockOk: colorTokens.text.primary,
    ingreso: colorTokens.success.main,
    retiro: colorTokens.warning.main,
    egreso: colorTokens.error.main,
  },

  // Chips de tipo de movimiento en tablas
  chips: {
    ingreso: { bg: colorTokens.success.light, text: colorTokens.success.main },
    retiro: { bg: colorTokens.warning.light, text: colorTokens.warning.main },
    egreso: { bg: colorTokens.error.light, text: colorTokens.error.main },
    info: { bg: colorTokens.info.light, text: colorTokens.info.main },
    primary: { bg: colorTokens.primary.light, text: colorTokens.primary.main },
  },

  // Cards de resumen (Apertura y cierre)
  summaryCards: {
    ventas: { borderColor: colorTokens.primary.main, bg: colorTokens.primary.light },
    efectivo: { borderColor: colorTokens.info.main, bg: colorTokens.info.light },
    retiros: { borderColor: colorTokens.warning.main, bg: colorTokens.warning.light },
    error: { borderColor: colorTokens.error.main, bg: colorTokens.error.light },
  },

  // Celdas de stock en tablas
  stockCell: {
    critical: { bg: colorTokens.error.light, text: colorTokens.error.main },
    low: { bg: colorTokens.warning.light, text: colorTokens.warning.main },
    ok: { bg: 'transparent', text: colorTokens.text.primary },
  },

} as const;

// ───────────────────────────────────────────────────────────────
//  TOKENS DE FORMA Y TIPOGRAFÍA
// ───────────────────────────────────────────────────────────────

export const shapeTokens = {
  borderRadiusSm: '6px',
  borderRadiusMd: '8px',
  borderRadiusLg: '10px',
  borderRadiusXl: '12px',
  borderRadiusPill: '100px',
} as const;

// La fuente se descarga en index.html (Google Fonts).
// Si cambiás la familia acá, actualizá también ese <link>.
export const typographyTokens = {
  fontFamily: '"Inter", system-ui, sans-serif',
  fontFamilyMono: '"DM Mono", "JetBrains Mono", monospace',
} as const;

// ✏️  ESCALA DE TAMAÑOS — los únicos 6 tamaños permitidos en la app
export const fontSizeTokens = {
  xs: '0.75rem',   // 12px — ayudas, chips, fechas, encabezados de tabla, tooltips
  md: '0.875rem',  // 14px — texto normal, celdas, botones, inputs, menús
  lg: '1rem',      // 16px — título de card / diálogo
  xl: '1.25rem',   // 20px — título de sección
  '2xl': '1.5rem',    // 24px — título de página
  '3xl': '2rem',      // 32px — números grandes (KPI, totales)
} as const;

// ✏️  PESOS — los únicos 4 grosores permitidos en la app
export const fontWeightTokens = {
  regular: 400,   // párrafos, texto largo
  medium: 500,   // celdas, labels, menú
  semibold: 600,   // títulos, botones, chips
  bold: 700,   // título de página, números grandes
} as const;

// ───────────────────────────────────────────────────────────────
//  MUI THEME — consume los tokens de arriba
//  NO edites esta sección para cambiar colores.
//  Editá los tokens de arriba y los cambios se propagan solos.
// ───────────────────────────────────────────────────────────────

const theme = createTheme({

  palette: {
    mode: 'light',
    primary: {
      main: colorTokens.primary.main,
      dark: colorTokens.primary.dark,
      light: colorTokens.primary.light,
      contrastText: colorTokens.primary.contrast,
    },
    secondary: {
      main: colorTokens.grey[500],
      dark: colorTokens.grey[600],
      light: colorTokens.grey[100],
      contrastText: colorTokens.text.onDark,
    },
    success: {
      main: colorTokens.success.main,
      dark: colorTokens.success.dark,
      light: colorTokens.success.light,
      contrastText: colorTokens.success.contrast,
    },
    error: {
      main: colorTokens.error.main,
      dark: colorTokens.error.dark,
      light: colorTokens.error.light,
      contrastText: colorTokens.error.contrast,
    },
    warning: {
      main: colorTokens.warning.main,
      dark: colorTokens.warning.dark,
      light: colorTokens.warning.light,
      contrastText: colorTokens.warning.contrast,
    },
    info: {
      main: colorTokens.info.main,
      dark: colorTokens.info.dark,
      light: colorTokens.info.light,
      contrastText: colorTokens.info.contrast,
    },
    background: {
      default: colorTokens.page.background,
      paper: colorTokens.page.surface,
    },
    text: {
      primary: colorTokens.text.primary,
      secondary: colorTokens.text.secondary,
      disabled: colorTokens.text.disabled,
    },
    divider: colorTokens.page.border,
  },

  typography: {
    fontFamily: typographyTokens.fontFamily,
    fontWeightLight: fontWeightTokens.regular,
    fontWeightRegular: fontWeightTokens.regular,
    fontWeightMedium: fontWeightTokens.medium,
    fontWeightBold: fontWeightTokens.bold,
    h1: { fontSize: fontSizeTokens['3xl'], fontWeight: fontWeightTokens.bold, letterSpacing: '-0.02em' },
    h2: { fontSize: fontSizeTokens['2xl'], fontWeight: fontWeightTokens.bold, letterSpacing: '-0.015em' },
    h3: { fontSize: fontSizeTokens.xl, fontWeight: fontWeightTokens.semibold, letterSpacing: '-0.01em' },
    h4: { fontSize: fontSizeTokens.lg, fontWeight: fontWeightTokens.semibold },
    h5: { fontSize: fontSizeTokens.lg, fontWeight: fontWeightTokens.semibold },
    h6: { fontSize: fontSizeTokens.md, fontWeight: fontWeightTokens.semibold },
    subtitle1: { fontSize: fontSizeTokens.lg, fontWeight: fontWeightTokens.medium },
    subtitle2: { fontSize: fontSizeTokens.md, fontWeight: fontWeightTokens.medium },
    body1: { fontSize: fontSizeTokens.md, lineHeight: 1.6 },
    body2: { fontSize: fontSizeTokens.md, lineHeight: 1.5 },
    button: { fontSize: fontSizeTokens.md, fontWeight: fontWeightTokens.semibold },
    caption: { fontSize: fontSizeTokens.xs },
    overline: { fontSize: fontSizeTokens.xs, fontWeight: fontWeightTokens.semibold },
  },

  shape: { borderRadius: 8 },

  components: {

    // ── CssBaseline — fondo global ─────────────────────────
    MuiCssBaseline: {
      styleOverrides: `
        body { background-color: ${colorTokens.page.background}; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: ${colorTokens.grey[100]}; }
        ::-webkit-scrollbar-thumb { background: ${colorTokens.grey[300]}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${colorTokens.grey[400]}; }
      `,
    },

    // ── MuiDrawer — SIDEBAR OSCURO ─────────────────────────
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colorTokens.sidebar.background,
          color: colorTokens.sidebar.text,
          borderRight: `1px solid ${colorTokens.sidebar.border}`,
        },
      },
    },

    // ── MuiListItemIcon — íconos del sidebar ───────────────
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: colorTokens.sidebar.text,
          minWidth: 0,
        },
      },
    },

    // ── MuiListItemButton — ítems del sidebar ──────────────
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: shapeTokens.borderRadiusMd,
          color: colorTokens.sidebar.text,
          transition: 'all 0.15s ease',
          '&:hover': {
            backgroundColor: colorTokens.sidebar.itemHoverBg,
            color: colorTokens.sidebar.textHover,
            '& .MuiListItemIcon-root': { color: colorTokens.sidebar.textHover },
          },
          '&.Mui-selected': {
            backgroundColor: colorTokens.sidebar.activeItem,
            color: colorTokens.sidebar.textActive,
            borderLeft: `3px solid ${colorTokens.sidebar.activeAccent}`,
            '& .MuiListItemIcon-root': { color: colorTokens.sidebar.textActive },
            '&:hover': {
              backgroundColor: colorTokens.sidebar.activeItem,
            },
          },
        },
      },
    },

    // ── MuiListItemText — texto del sidebar ────────────────
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: fontSizeTokens.md,
          fontWeight: fontWeightTokens.medium,
          color: 'inherit',
        },
      },
    },

    // ── MuiTypography ─────────────────────────────────────
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colorTokens.text.primary,
        },
      },
    },

    // ── MuiButton ─────────────────────────────────────────
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: shapeTokens.borderRadiusMd,
          fontWeight: fontWeightTokens.semibold,
          fontSize: fontSizeTokens.md,
          textTransform: 'none' as const,
          letterSpacing: '0.01em',
          transition: 'all 0.15s ease',
        },
        containedPrimary: {
          backgroundColor: colorTokens.primary.main,
          color: colorTokens.primary.contrast,
          '&:hover': { backgroundColor: colorTokens.primary.dark },
        },
        containedSuccess: {
          backgroundColor: colorTokens.success.main,
          '&:hover': { backgroundColor: colorTokens.success.dark },
        },
        containedError: {
          backgroundColor: colorTokens.error.main,
          '&:hover': { backgroundColor: colorTokens.error.dark },
        },
        outlined: {
          borderColor: colorTokens.page.border,
          color: colorTokens.text.secondary,
          '&:hover': {
            backgroundColor: colorTokens.grey[100],
            borderColor: colorTokens.grey[300],
          },
        },
        text: {
          color: colorTokens.text.secondary,
          '&:hover': { backgroundColor: colorTokens.grey[100] },
        },
        sizeSmall: { padding: '4px 12px', fontSize: fontSizeTokens.xs },
        sizeMedium: { padding: '7px 16px' },
        sizeLarge: { padding: '10px 22px', fontSize: fontSizeTokens.lg },
      },
    },

    // ── MuiIconButton ─────────────────────────────────────
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: shapeTokens.borderRadiusMd,
          color: colorTokens.text.secondary,
          '&:hover': { backgroundColor: colorTokens.grey[100] },
        },
      },
    },

    // ── MuiCard ───────────────────────────────────────────
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: colorTokens.page.surface,
          color: colorTokens.text.primary,
          borderRadius: shapeTokens.borderRadiusLg,
          border: `1px solid ${colorTokens.page.border}`,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.06)',
        },
      },
    },

    // ── MuiAppBar — mismo color que el SIDEBAR ─────────────
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: colorTokens.sidebar.background,
          color: colorTokens.sidebar.text,
          border: 'none',
          borderBottom: `1px solid ${colorTokens.sidebar.border}`,
          borderRadius: 0,
          boxShadow: 'none',
          '& .MuiTypography-root': { color: 'inherit' },
          '& .MuiButton-text, & .MuiButton-outlined': {
            color: colorTokens.sidebar.text,
            '&:hover': { backgroundColor: colorTokens.sidebar.itemHoverBg },
          },
          '& .MuiButton-outlined': {
            borderColor: colorTokens.grey[600],
            '&:hover': { borderColor: colorTokens.grey[500] },
          },
        },
      },
    },

    // ── MuiPaper ──────────────────────────────────────────
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: `1px solid ${colorTokens.page.border}`,
          borderRadius: shapeTokens.borderRadiusLg,
          backgroundImage: 'none',
        },
      },
    },

    // ── MuiTextField ──────────────────────────────────────
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: colorTokens.page.surface,
          borderRadius: shapeTokens.borderRadiusMd,
          '& .MuiOutlinedInput-root': {
            color: colorTokens.text.primary,
            borderRadius: shapeTokens.borderRadiusMd,
            '& fieldset': { borderColor: colorTokens.grey[300] },
            '&:hover fieldset': { borderColor: colorTokens.grey[400] },
            '&.Mui-focused fieldset': {
              borderColor: colorTokens.primary.main,
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root': {
            color: colorTokens.text.secondary,
            '&.Mui-focused': { color: colorTokens.primary.main },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colorTokens.grey[300],
          },
        },
      },
    },

    // ── MuiCheckbox ───────────────────────────────────────
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colorTokens.grey[300],
          '&.Mui-checked': { color: colorTokens.primary.main },
        },
      },
    },

    // ── MuiRadio ──────────────────────────────────────────
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colorTokens.grey[300],
          '&.Mui-checked': { color: colorTokens.primary.main },
        },
      },
    },

    // ── MuiTableHead ──────────────────────────────────────
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: colorTokens.grey[50],
            color: colorTokens.text.muted,
            fontSize: fontSizeTokens.xs,
            fontWeight: fontWeightTokens.semibold,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            borderBottom: `1px solid ${colorTokens.page.border}`,
            padding: '10px 12px',
          },
        },
      },
    },

    // ── MuiTableRow ───────────────────────────────────────
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: colorTokens.grey[100] },
          '& .MuiTableCell-root': {
            borderBottom: `1px solid ${colorTokens.page.borderLight}`,
            fontSize: fontSizeTokens.md,
            padding: '10px 12px',
            color: colorTokens.text.primary,
          },
          '&:last-child .MuiTableCell-root': { borderBottom: 'none' },
        },
      },
    },

    // ── MuiChip ───────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: shapeTokens.borderRadiusPill,
          fontSize: fontSizeTokens.xs,
          fontWeight: fontWeightTokens.semibold,
          height: '22px',
        },
        colorSuccess: { backgroundColor: colorTokens.success.light, color: colorTokens.success.main },
        colorError: { backgroundColor: colorTokens.error.light, color: colorTokens.error.main },
        colorWarning: { backgroundColor: colorTokens.warning.light, color: colorTokens.warning.main },
        colorInfo: { backgroundColor: colorTokens.info.light, color: colorTokens.info.main },
        colorPrimary: { backgroundColor: colorTokens.primary.light, color: colorTokens.primary.main },
      },
    },

    // ── MuiAlert ──────────────────────────────────────────
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: shapeTokens.borderRadiusMd,
          fontSize: fontSizeTokens.md,
          fontWeight: fontWeightTokens.medium,
          border: '1px solid transparent',
        },
        standardSuccess: {
          backgroundColor: colorTokens.success.light,
          color: colorTokens.success.dark,
          borderColor: colorTokens.success.mid,
          '& .MuiAlert-icon': { color: colorTokens.success.main },
        },
        standardError: {
          backgroundColor: colorTokens.error.light,
          color: colorTokens.error.dark,
          borderColor: colorTokens.error.mid,
          '& .MuiAlert-icon': { color: colorTokens.error.main },
        },
        standardWarning: {
          backgroundColor: colorTokens.warning.light,
          color: colorTokens.warning.dark,
          borderColor: colorTokens.warning.mid,
          '& .MuiAlert-icon': { color: colorTokens.warning.main },
        },
        standardInfo: {
          backgroundColor: colorTokens.info.light,
          color: colorTokens.info.dark,
          borderColor: colorTokens.info.mid,
          '& .MuiAlert-icon': { color: colorTokens.info.main },
        },
      },
    },

    // ── MuiDivider ────────────────────────────────────────
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: colorTokens.page.border },
      },
    },

    // ── MuiTooltip ────────────────────────────────────────
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: colorTokens.grey[900],
          color: '#FFFFFF',
          fontSize: fontSizeTokens.xs,
          borderRadius: shapeTokens.borderRadiusSm,
          padding: '5px 10px',
        },
      },
    },

    // ── MuiTab / MuiTabs ──────────────────────────────────
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: fontSizeTokens.md,
          fontWeight: fontWeightTokens.medium,
          textTransform: 'none' as const,
          color: colorTokens.text.secondary,
          minHeight: '44px',
          '&.Mui-selected': { color: colorTokens.primary.main, fontWeight: fontWeightTokens.semibold },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: colorTokens.primary.main, height: '2px' },
      },
    },

    // ── MuiMenu / MuiMenuItem ─────────────────────────────
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: shapeTokens.borderRadiusMd,
          boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
          border: `1px solid ${colorTokens.page.border}`,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: fontSizeTokens.md,
          borderRadius: shapeTokens.borderRadiusSm,
          margin: '2px 4px',
          color: colorTokens.text.primary,
          '&:hover': { backgroundColor: colorTokens.grey[100] },
          '&.Mui-selected': {
            backgroundColor: colorTokens.primary.light,
            color: colorTokens.primary.main,
            fontWeight: fontWeightTokens.semibold,
            '&:hover': { backgroundColor: colorTokens.primary.mid },
          },
        },
      },
    },

    // ── MuiDialog ─────────────────────────────────────────
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: shapeTokens.borderRadiusXl,
          boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: fontSizeTokens.lg,
          fontWeight: fontWeightTokens.bold,
          color: colorTokens.text.primary,
          borderBottom: `1px solid ${colorTokens.page.border}`,
          padding: '16px 24px',
        },
      },
    },

    // ── MuiSwitch ─────────────────────────────────────────
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': { color: colorTokens.primary.main },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: colorTokens.primary.main,
          },
        },
      },
    },

    // ── MuiSkeleton ───────────────────────────────────────
    MuiSkeleton: {
      styleOverrides: {
        root: { backgroundColor: colorTokens.grey[100] },
      },
    },

    // ── MuiBadge ──────────────────────────────────────────
    MuiBadge: {
      styleOverrides: {
        badge: { fontSize: fontSizeTokens.xs, fontWeight: fontWeightTokens.bold },
        colorPrimary: { backgroundColor: colorTokens.primary.main },
        colorError: { backgroundColor: colorTokens.error.main },
      },
    },

    // ── MuiSelect ─────────────────────────────────────────
    MuiSelect: {
      styleOverrides: {
        select: { fontSize: fontSizeTokens.md },
      },
    },

    // ── MuiLinearProgress ─────────────────────────────────
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: '100px', backgroundColor: colorTokens.grey[200] },
        bar: { borderRadius: '100px' },
      },
    },

  },
});

export default theme;
