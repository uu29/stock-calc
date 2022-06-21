import { useDispatch, useSelector } from "react-redux";
import { LabelBlock, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import { valueTextTheme } from "./interface";
import { State } from "store/slices";
import { CurrentStockType, setCurrentStock, SetStockParams } from "store/slices/home/reducer";
import label from "json/label.json";
import ReadOnlyValue from "./ReadOnlyValue";
import InputValueContainer from "./InputValueContainer";

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
