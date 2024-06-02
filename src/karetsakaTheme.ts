import {
  defaultLightTheme,
  defaultDarkTheme,
  RaThemeOptions,
} from "react-admin";

export const commonComponentsTheme: Partial<RaThemeOptions["components"]> = {
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      size: "small",
    },
  },
  MuiFormControl: {
    defaultProps: {
      variant: "outlined",
      size: "small",
    },
  },
  RaToolbar: {
    styleOverrides: {
      root: {
        backgroundColor: "transparent",
      },
    },
  },
};

export const karetsakaLightTheme: RaThemeOptions = {
  ...defaultLightTheme,
  components: {
    ...defaultLightTheme.components,
    ...commonComponentsTheme,
  },
};

export const karetsakaDarkTheme = {
  ...defaultDarkTheme,
  components: {
    ...defaultDarkTheme.components,
    ...commonComponentsTheme,
  },
};
