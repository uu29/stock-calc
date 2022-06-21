import { useDispatch, useSelector } from "react-redux";
import { LabelBlock, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import { valueColorTheme, valueTextTheme } from "./interface";
import { State } from "store/slices";
import { SetStockParams, setTradingStock } from "store/slices/home/reducer";
import label from "json/label.json";
import ReadOnlyValue from "./ReadOnlyValue";
import InputValueContainer from "./InputValueContainer";
import { numberWithCommas } from "lib/function";
import { TradingStockType } from "store/slices/home/interface";

const TradingStock = () => {
  const stockData = useSelector((state: State) => state.home.tradingStock);
  const totalAmount = stockData.tradingQuantity * stockData.tradingPrice;
  const stockDataKeys = Object.keys(stockData) as TradingStockType[];
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
        <LabelBlock>{label.trading_totalAmount}</LabelBlock>
        <ReadOnlyValue value={numberWithCommas(totalAmount)} colorTheme={totalAmount > 0 ? valueColorTheme.active : valueColorTheme.inactive} theme={valueTextTheme.small} />
      </SectionRightLine>
    </SectionItem>
  );
};

export default TradingStock;
