import { useDispatch, useSelector } from "react-redux";
import { LabelBlock, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import { valueColorTheme, valueTextTheme } from "./interface";
import { State } from "store/slices";
import { SetStockParams, setTradingStock } from "store/slices/home/reducer";
import label from "json/label.json";
import ReadOnlyValue from "./ReadOnlyValue";
import InputValueContainer from "./InputValueContainer";
import { numberWithCommas } from "lib/function";
import { tradingStock, TradingStockType } from "store/slices/home/interface";

const TradingStock = () => {
  const stockData = useSelector((state: State) => state.home.tradingStock);
  const readOnlyKeys = [tradingStock.tradingTotalAmount, tradingStock.tradingRor] as TradingStockType[];
  const stockDataKeys = Object.keys(stockData).filter((keyName) => !readOnlyKeys.includes(keyName as TradingStockType)) as TradingStockType[];
  const dispatch = useDispatch();

  const changeCallback = (params: SetStockParams) => {
    dispatch(setTradingStock(params));
  };

  return (
    <SectionItem>
      <SectionTitle>추가 매수</SectionTitle>
      {stockDataKeys.map((keyName: TradingStockType) => (
        <InputValueContainer key={keyName} inputLabel={label[keyName]} inputName={keyName} inputValue={stockData[keyName]} changeCallback={changeCallback} />
      ))}
      <SectionRightLine>
        <LabelBlock>{label.tradingTotalAmount}</LabelBlock>
        <ReadOnlyValue
          value={numberWithCommas(stockData.tradingTotalAmount)}
          colorTheme={stockData.tradingTotalAmount > 0 ? valueColorTheme.active : valueColorTheme.inactive}
          theme={valueTextTheme.small}
        />
      </SectionRightLine>
      <SectionRightLine>
        <LabelBlock>{label.tradingRor}</LabelBlock>
        <ReadOnlyValue
          value={numberWithCommas(parseFloat(stockData.tradingRor.toFixed(2)))}
          colorTheme={stockData.tradingRor > 0 ? valueColorTheme.plus : stockData.tradingRor === 0 ? valueColorTheme.inactive : valueColorTheme.minus}
          theme={valueTextTheme.small}
          fontWeight={600}
          unit="%"
        />
      </SectionRightLine>
    </SectionItem>
  );
};

export default TradingStock;
