import { useDispatch, useSelector } from "react-redux";
import { LabelBlock, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import { valueColorTheme, valueTextTheme } from "./interface";
import { State } from "store/slices";
import { setCurrentStock, SetStockParams } from "store/slices/home/reducer";
import label from "json/label.json";
import ReadOnlyValue from "./ReadOnlyValue";
import InputValueContainer from "./InputValueContainer";
import { numberWithCommas } from "lib/function";
import { useCallback } from "react";
import { currentStock, CurrentStockType } from "store/slices/home/interface";

const CurrentStock = () => {
  const stockData = useSelector((state: State) => state.home.currentStock);
  const readOnlyKeys = [currentStock.currentTotalAmount, currentStock.currentRor] as CurrentStockType[];
  const stockDataKeys = Object.keys(stockData).filter((keyName) => !readOnlyKeys.includes(keyName as CurrentStockType)) as CurrentStockType[];
  const dispatch = useDispatch();

  const changeCallback = useCallback((params: SetStockParams) => {
    dispatch(setCurrentStock(params));
  }, []);

  return (
    <SectionItem>
      <SectionTitle>현재 보유 주식</SectionTitle>
      {stockDataKeys.map((keyName: CurrentStockType) => (
        <InputValueContainer key={keyName} inputLabel={label[keyName]} inputName={keyName} inputValue={stockData[keyName]} changeCallback={changeCallback} />
      ))}
      <SectionRightLine>
        <LabelBlock>{label.currentTotalAmount}</LabelBlock>
        <ReadOnlyValue
          value={numberWithCommas(stockData.currentTotalAmount)}
          colorTheme={stockData.currentTotalAmount > 0 ? valueColorTheme.active : valueColorTheme.inactive}
          theme={valueTextTheme.small}
        />
      </SectionRightLine>
      <SectionRightLine>
        <LabelBlock>{label.currentRor}</LabelBlock>
        <ReadOnlyValue
          value={numberWithCommas(parseFloat(stockData.currentRor.toFixed(2)))}
          colorTheme={stockData.currentRor > 0 ? valueColorTheme.plus : stockData.currentRor === 0 ? valueColorTheme.inactive : valueColorTheme.minus}
          theme={valueTextTheme.small}
          fontWeight={600}
          unit="%"
        />
      </SectionRightLine>
    </SectionItem>
  );
};

export default CurrentStock;
