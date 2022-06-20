import { useDispatch, useSelector } from "react-redux";
import { InputLabel, InputValue, LabelBlock, SectionInputLine, SectionItem, SectionRightLine, SectionTitle, ValueText } from "./CalculatorStyle";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InputValueProps, valueTextTheme } from "./interface";
import { State } from "store/slices";
import { CurrentStockType, setCurrentStock } from "store/slices/home/reducer";
import React from "react";
import label from "json/label.json";

export const Value = React.memo(({ value, theme = valueTextTheme.medium }: InputValueProps) => (
  <ValueText isActive={value > 0} textTheme={theme}>
    {value}
  </ValueText>
));

interface InputValueContainerProps {
  label: string;
  name: string;
  value: number;
  changeHandler: () => void;
}

interface ChangeHandlerProps {
  name: CurrentStockType;
  value: number;
}

const InputValueContainer = React.memo(({ label, name, value, changeHandler }: InputValueContainerProps) => (
  <SectionInputLine>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <InputValue id={name} name={name} value={value} onChange={changeHandler} />
  </SectionInputLine>
));

const CurrentStock = () => {
  const currentStock = useSelector((state: State) => state.home.current_stock);
  const currentStockKeys = Object.keys(currentStock) as CurrentStockType[];
  const dispatch = useDispatch();

  const changeHandler = ({ name, value }: ChangeHandlerProps) => {
    dispatch(setCurrentStock({ [name]: value }));
  };

  return (
    <SectionItem>
      <SectionTitle>현재 보유 주식</SectionTitle>
      {currentStockKeys.map((name: CurrentStockType) => (
        <InputValueContainer key={name} label={label[name]} name={name} value={currentStock[name]} onChangeHandler={() => {}} />
      ))}
      <SectionRightLine>
        <LabelBlock>총 매입 금액</LabelBlock>
        <Value value={0} theme={valueTextTheme.small} />
      </SectionRightLine>
    </SectionItem>
  );
};

export default CurrentStock;
