export const valueTextTheme = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

export type ValueTextTheme = typeof valueTextTheme[keyof typeof valueTextTheme];

export const valueColorTheme = {
  main: "main",
  plus: "plus",
  minus: "minus",
  inactive: "inactive",
  active: "active",
  inputGray: "inputGray",
} as const;

export type ValueColorTheme = typeof valueColorTheme[keyof typeof valueColorTheme];
