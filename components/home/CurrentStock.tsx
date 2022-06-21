import { useDispatch, useSelector } from "react-redux";
import { InputLabel, InputValue, LabelBlock, SectionInputLine, SectionItem, SectionRightLine, SectionTitle, ReadOnlyValueText } from "./CalculatorStyle";
import { ReadOnlyValueProps, valueTextTheme } from "./interface";
import { State } from "store/slices";
import { CurrentStockType, setCurrentStock, SetStockParams } from "store/slices/home/reducer";
import React, { useEffect, useState } from "react";
import label from "json/label.json";
import { numberWithCommas } from "../../lib/function";

export const ReadOnlyValue = React.memo(({ value, theme = valueTextTheme.medium }: ReadOnlyValueProps) => (
  <ReadOnlyValueText isActive={value > 0} textTheme={theme}>
    {numberWithCommas(value)}
  </ReadOnlyValueText>
));

type ChangeCallbackType = ({ params }: SetStockParams) => void;

interface InputValueContainerProps {
  inputLabel: string;
  inputName: string;
  inputValue: number;
  changeCallback: ChangeCallbackType;
}

const numRegex = /^\d+$/;
const commaRegex = /,/g;

const InputValueContainer = React.memo(({ inputLabel, inputName, inputValue, changeCallback }: InputValueContainerProps) => {
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    value = value.replace(commaRegex, "");
    const isNum = numRegex.test(value);
    if (isNum || value === "") changeCallback({ [name]: Number(value) });
  };

  useEffect(() => {
    let val = "";
    if (inputValue > 0) val = numberWithCommas(inputValue);
    setDisplayValue(val);
  }, [inputValue]);

  return (
    <SectionInputLine>
      <InputLabel htmlFor={inputName}>{inputLabel}</InputLabel>
      <InputValue type="text" id={inputName} name={inputName} value={displayValue} onChange={handleChange} />
    </SectionInputLine>
  );
});

const CurrentStock = () => {
  const currentStock = useSelector((state: State) => state.home.current_stock);
  const currentTotalAmount = currentStock.holding_quantity * currentStock.purchase_price;
  const currentStockKeys = Object.keys(currentStock) as CurrentStockType[];
  const dispatch = useDispatch();

  const changeCallback = (params: SetStockParams) => {
    dispatch(setCurrentStock(params));
  };

  return (
    <SectionItem>
      <SectionTitle>현재 보유 주식</SectionTitle>
      {currentStockKeys.map((keyName: CurrentStockType) => (
        <InputValueContainer key={keyName} inputLabel={label[keyName]} inputName={keyName} inputValue={currentStock[keyName]} changeCallback={changeCallback} />
      ))}
      <SectionRightLine>
        <LabelBlock>{label.current_total_amount}</LabelBlock>
        <ReadOnlyValue value={currentTotalAmount} theme={valueTextTheme.small} />
      </SectionRightLine>
    </SectionItem>
  );
};

export default CurrentStock;
