import { createTheme } from "@mui/material/styles";
import "typeface-ubuntu";
import "typeface-special-elite";
/* c8 ignore start */

export const COLOR_100 = "#FFFFFF";
export const COLOR_200 = "#E0E0E0";
export const COLOR_300 = "#C2C2C2";
export const COLOR_500 = "#858585";
export const COLOR_900 = "#1F1F1F";
export const textColor = COLOR_900;
export const inverseBackgroundColor = COLOR_900;
export const inverseTextColor = COLOR_100;

export const primary = "#A6E102";
export const secondary = "#C47E5A";
export const black = "#181818";
export const white = "#FFFFFF";

// export const

declare module "@mui/material/Button" {}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading_1_bold: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    heading_1_bold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading_1_bold: true;
  }
}

export const primaryFontFamily = "'Ubuntu', sans-serif";
export const secondaryFontFamily = "'Special Elite', sans-serif";
export const regularFontWeight = 400;
export const boldFontWeight = 700;

const theme = createTheme({
  palette: {
    primary: {
      main: COLOR_900,
    },
    secondary: {
      main: primary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: primary,
          textDecorationColor: primary,
        },
      },
    },
  },
  typography: {
    fontFamily: primaryFontFamily,
    heading_1_bold: {
      fontFamily: secondaryFontFamily,
      fontSize: "72px",
      lineHeight: "120%",
      fontWeight: boldFontWeight,
    },
    body1: {
      color: primary,
      fontFamily: "Ubuntu",
      fontSize: "1rem",
      textAlign: "center",
      margin: "0px 0px 0px 0px",
      padding: "0px 0px 0px 0px",
      "a:visted": {
        color: primary,
        textDecoration: "none",
      },

    },
  },
});

export default theme;
/* c8 ignore stop */
