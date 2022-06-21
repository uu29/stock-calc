import React from "react";
import { ReadOnlyValueProps, valueTextTheme } from "./interface";
import { ReadOnlyValueText } from "./CalculatorStyle";
import { numberWithCommas } from "lib/function";

const ReadOnlyValue = React.memo(({ value, theme = valueTextTheme.medium }: ReadOnlyValueProps) => (
  <ReadOnlyValueText isActive={value > 0} textTheme={theme}>
    {numberWithCommas(value)}
  </ReadOnlyValueText>
));

export default ReadOnlyValue;
