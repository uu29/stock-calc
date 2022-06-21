import { CalculatorContainer, Form, Label, Refresh, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import CurrentStock from "./CurrentStock";
import { valueTextTheme } from "./interface";
import ReadOnlyValue from "./ReadOnlyValue";
import TradingStock from "./TradingStock";

const Calculator = () => {
  return (
    <CalculatorContainer>
      <Refresh type="button">새로고침</Refresh>
      <Form>
        <ul>
          <SectionItem>
            <SectionTitle>최종 평단가</SectionTitle>
            <SectionRightLine>
              <ReadOnlyValue value={0} theme={valueTextTheme.large} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>매수 총액</Label>
              <ReadOnlyValue value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>최종 매수 금액</Label>
              <ReadOnlyValue value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>최종 수량</Label>
              <ReadOnlyValue value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>손익률</Label>
              <ReadOnlyValue value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>손익금</Label>
              <ReadOnlyValue value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
          </SectionItem>
          <CurrentStock />
          <TradingStock />
        </ul>
      </Form>
    </CalculatorContainer>
  );
};

export default Calculator;
