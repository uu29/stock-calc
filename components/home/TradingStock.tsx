import { useDispatch, useSelector } from "react-redux";
import { LabelBlock, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import { valueTextTheme } from "./interface";
import { State } from "store/slices";
import { TradingStockType, SetStockParams, setTradingStock } from "store/slices/home/reducer";
import label from "json/label.json";
import ReadOnlyValue from "./ReadOnlyValue";
import InputValueContainer from "./InputValueContainer";

const TradingStock = () => {
  const tradingStock = useSelector((state: State) => state.home.trading_stock);
  const currentTotalAmount = tradingStock.trading_quantity * tradingStock.trading_price;
  const tradingStockKeys = Object.keys(tradingStock) as TradingStockType[];
  const dispatch = useDispatch();

  const changeCallback = (params: SetStockParams) => {
    dispatch(setTradingStock(params));
  };

  return (
    <SectionItem>
      <SectionTitle>추가 매수</SectionTitle>
      {tradingStockKeys.map((keyName: TradingStockType) => (
        <InputValueContainer key={keyName} inputLabel={label[keyName]} inputName={keyName} inputValue={tradingStock[keyName]} changeCallback={changeCallback} />
      ))}
      <SectionRightLine>
        <LabelBlock>{label.trading_total_amount}</LabelBlock>
        <ReadOnlyValue value={currentTotalAmount} theme={valueTextTheme.small} />
      </SectionRightLine>
    </SectionItem>
  );
};

export default TradingStock;
