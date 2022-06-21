export const valueTextTheme = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

export type ValueTextTheme = typeof valueTextTheme[keyof typeof valueTextTheme];

export interface ReadOnlyValueProps {
  value: number;
  theme?: ValueTextTheme;
}
