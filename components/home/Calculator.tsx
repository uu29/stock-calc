import { CalculatorContainer, Form, Label, Refresh, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import CurrentStock from "./CurrentStock";
import { valueColorTheme, valueTextTheme } from "./interface";
import ReadOnlyValue from "./ReadOnlyValue";
import TradingStock from "./TradingStock";
import { useDispatch, useSelector } from "react-redux";
import { State } from "store/slices";
import { numberWithCommas } from "../../lib/function";
import { resetAllStock } from "../../store/slices/home/reducer";

const Calculator = () => {
  const stockData = useSelector((state: State) => state.home.totalStock);
  const dispatch = useDispatch();
  const handleClickRefresh = () => {
    dispatch(resetAllStock());
  };

  return (
    <CalculatorContainer>
      <Refresh type="button" onClick={handleClickRefresh} title="새로고침">
        새로고침
      </Refresh>
      <Form>
        <ul>
          <CurrentStock />
          <TradingStock />
          <SectionItem>
            <SectionTitle>최종 평단가</SectionTitle>
            <SectionRightLine>
              <ReadOnlyValue
                value={numberWithCommas(Number(stockData.totalAverage.toFixed(2)))}
                colorTheme={stockData.totalAverage > 0 ? valueColorTheme.active : valueColorTheme.inactive}
                theme={valueTextTheme.large}
              />
            </SectionRightLine>
            <SectionRightLine>
              <Label>매수 총액</Label>
              <ReadOnlyValue
                value={numberWithCommas(stockData.totalAmount)}
                colorTheme={stockData.totalAmount > 0 ? valueColorTheme.active : valueColorTheme.inactive}
                theme={valueTextTheme.small}
              />
            </SectionRightLine>
            <SectionRightLine>
              <Label>최종 수량</Label>
              <ReadOnlyValue
                value={numberWithCommas(stockData.totalQuantity)}
                colorTheme={stockData.totalQuantity > 0 ? valueColorTheme.active : valueColorTheme.inactive}
                theme={valueTextTheme.small}
              />
            </SectionRightLine>
            {/*<SectionRightLine>*/}
            {/*  <Label>최종 수익률</Label>*/}
            {/*  <ReadOnlyValue*/}
            {/*    value={stockData.totalRor.toFixed(2)}*/}
            {/*    colorTheme={stockData.totalRor > 0 ? valueColorTheme.plus : stockData.totalRor === 0 ? valueColorTheme.inactive : valueColorTheme.minus}*/}
            {/*    theme={valueTextTheme.small}*/}
            {/*    fontWeight={600}*/}
            {/*    unit="%"*/}
            {/*  />*/}
            {/*</SectionRightLine>*/}
            {/*<SectionRightLine>*/}
            {/*  <Label>최종 수익금</Label>*/}
            {/*  <ReadOnlyValue value={0} colorTheme={valueColorTheme.inactive} theme={valueTextTheme.small} />*/}
            {/*</SectionRightLine>*/}
          </SectionItem>
        </ul>
      </Form>
    </CalculatorContainer>
  );
};

export default Calculator;
