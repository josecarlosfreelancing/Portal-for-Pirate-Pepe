import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#1A1919",
    900: "#161C24",
    500_8: alpha("#919EAB", 0.08),
    500_12: alpha("#919EAB", 0.12),
    500_16: alpha("#919EAB", 0.16),
    500_24: alpha("#919EAB", 0.24),
    // #343A40
    500_32: alpha("#919EAB", 0.32),
    500_48: alpha("#919EAB", 0.48),
    500_56: alpha("#919EAB", 0.56),
    500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
    lighter: "#e4cffe",
    light: "#c99efd",
    main: "#BB86FC",
    dark: "#c99efd",
    darker: "#e4cffe",
    contrastText: "#fff",
};
const SECONDARY = {
    lighter: "#D6E4FF",
    light: "#84A9FF",
    main: "#3366FF",
    dark: "#1939B7",
    darker: "#091A7A",
    contrastText: "#fff",
};
const INFO = {
    lighter: "#0AA79D",
    light: "#0AA79D",
    main: "#31D6F1",
    dark: "#0AA79D",
    darker: "#0AA79D",
    contrastText: "#fff",
};
const SUCCESS = {
    lighter: "#E9FCD4",
    light: "#AAF27F",
    main: "#23B825",
    dark: "#229A16",
    darker: "#08660D",
    contrastText: GREY[800],
};
const WARNING = {
    lighter: "#FFF7CD",
    light: "#FFE16A",
    main: "#FEF000",
    dark: "#F29835",
    darker: "#7A4F01",
    contrastText: GREY[800],
};
const ERROR = {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
    contrastText: "#fff",
};

const GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
    violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
    blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
    green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
    yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
    red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
    };

const COMMON = {
    common: { black: "#000", white: "#fff" },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
    grey: GREY,
    gradients: GRADIENTS,
    divider: "#318500",
    chart: CHART_COLORS,
    action: {
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

const palette = {
    light: {
        ...COMMON,
        text: { primary: "#1A0B05", secondary: "#6F6562", disabled: "#999999" },
        background: { paper: "#FFFFFF", default: "#FCFBFA", neutral: "#F6F8FC" },
        action: { active: GREY[600], ...COMMON.action },
    },
    dark: {
        ...COMMON,
        text: { primary: "#FFF", secondary: GREY[500], disabled: GREY[600] },
        background: { paper: "#000900", default: "#000900", neutral: "#F6F8FC" },
        action: { active: GREY[500], ...COMMON.action },
    },
};

export default palette;
