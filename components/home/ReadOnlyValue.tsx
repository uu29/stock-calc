import React from "react";
import { ValueColorTheme, ValueTextTheme, valueTextTheme } from "./interface";
import { ReadOnlyValueText, UnitText } from "./CalculatorStyle";

interface ReadOnlyValueProps {
  value: number | string;
  colorTheme: ValueColorTheme;
  theme?: ValueTextTheme;
  unit?: string;
  fontWeight?: string | number;
}

const ReadOnlyValue = React.memo(({ value, colorTheme, theme = valueTextTheme.medium, unit, fontWeight }: ReadOnlyValueProps) => (
  <ReadOnlyValueText colorTheme={colorTheme} textTheme={theme} fontWeight={fontWeight}>
    {value}
    {unit && <UnitText>{unit}</UnitText>}
  </ReadOnlyValueText>
));

export default ReadOnlyValue;
