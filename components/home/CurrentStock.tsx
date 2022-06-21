import { useDispatch, useSelector } from "react-redux";
import { LabelBlock, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import { valueColorTheme, valueTextTheme } from "./interface";
import { State } from "store/slices";
import { CurrentStockType, setCurrentStock, SetStockParams } from "store/slices/home/reducer";
import label from "json/label.json";
import ReadOnlyValue from "./ReadOnlyValue";
import InputValueContainer from "./InputValueContainer";
import { getRor, numberWithCommas } from "../../lib/function";

const CurrentStock = () => {
  const stockData = useSelector((state: State) => state.home.current_stock);
  const totalAmount = stockData.holding_quantity * stockData.purchase_price;
  const ror = getRor(stockData.market_price * stockData.holding_quantity, totalAmount);
  const stockDataKeys = Object.keys(stockData) as CurrentStockType[];
  const dispatch = useDispatch();

  const changeCallback = (params: SetStockParams) => {
    dispatch(setCurrentStock(params));
  };

  return (
    <SectionItem>
      <SectionTitle>현재 보유 주식</SectionTitle>
      {stockDataKeys.map((keyName: CurrentStockType) => (
        <InputValueContainer key={keyName} inputLabel={label[keyName]} inputName={keyName} inputValue={stockData[keyName]} changeCallback={changeCallback} />
      ))}
      <SectionRightLine>
        <LabelBlock>{label.current_total_amount}</LabelBlock>
        <ReadOnlyValue value={numberWithCommas(totalAmount)} colorTheme={totalAmount > 0 ? valueColorTheme.active : valueColorTheme.inactive} theme={valueTextTheme.small} />
      </SectionRightLine>
      <SectionRightLine>
        <LabelBlock>{label.current_ror}</LabelBlock>
        <ReadOnlyValue
          value={ror.toFixed(2)}
          colorTheme={ror > 0 ? valueColorTheme.plus : ror === 0 ? valueColorTheme.inactive : valueColorTheme.minus}
          theme={valueTextTheme.small}
          fontWeight={600}
          unit="%"
        />
      </SectionRightLine>
    </SectionItem>
  );
};

export default CurrentStock;
