import React, { useEffect, useState } from "react";
import { numberWithCommas } from "lib/function";
import { InputLabel, InputValue, SectionInputLine } from "./CalculatorStyle";
import { SetStockParams } from "store/slices/home/reducer";
const regex = {
  float: /^\d*\.?\d*$/,
  endWithDot: /\.$/,
  comma: /,/g,
};

type ChangeCallbackType = ({ params }: SetStockParams) => void;

interface InputValueContainerProps {
  inputLabel: string;
  inputName: string;
  inputValue: number;
  changeCallback: ChangeCallbackType;
  readOnly?: boolean;
}

const InputValueContainer = React.memo(({ inputLabel, inputName, inputValue, changeCallback, readOnly }: InputValueContainerProps) => {
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    value = value.replace(regex.comma, "");
    const isFloat = regex.float.test(value);
    const isEndWithDot = regex.endWithDot.test(value);
    const floatNumber = isEndWithDot ? value : parseFloat(value);
    if (isFloat || value === "") changeCallback({ [name]: floatNumber });
  };

  useEffect(() => {
    let val = "";
    if (inputValue > 0) val = numberWithCommas(inputValue);
    setDisplayValue(val);
  }, [inputValue]);

  return (
    <SectionInputLine>
      <InputLabel htmlFor={inputName}>{inputLabel}</InputLabel>
      <InputValue type="text" id={inputName} name={inputName} value={displayValue} onChange={handleChange} readOnly={readOnly} />
    </SectionInputLine>
  );
});

export default InputValueContainer;
