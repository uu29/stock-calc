import { CalculatorContainer, Form, InputLabel, InputValue, Label, LabelBlock, Refresh, SectionInputLine, SectionItem, SectionRightLine, SectionTitle } from "./CalculatorStyle";
import CurrentAccount, { Value } from "./CurrentAccount";
import { valueTextTheme } from "./interface";

const Calculator = () => {
  return (
    <CalculatorContainer>
      <Refresh type="button">새로고침</Refresh>
      <Form>
        <ul>
          <SectionItem>
            <SectionTitle>최종 평단가</SectionTitle>
            <SectionRightLine>
              <Value value={0} theme={valueTextTheme.large} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>최종 매수 금액</Label>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>최종 수량</Label>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>손익률</Label>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
            <SectionRightLine>
              <Label>손익금</Label>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
          </SectionItem>
          <CurrentAccount />
          <SectionItem>
            <SectionTitle>추가 매수</SectionTitle>
            <SectionInputLine>
              <InputLabel>추매 평단가</InputLabel>
              <InputValue value={0} />
            </SectionInputLine>
            <SectionInputLine>
              <InputLabel>추매 수량</InputLabel>
              <InputValue value={0} />
            </SectionInputLine>
            <SectionRightLine>
              <LabelBlock>총 추매 금액</LabelBlock>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionRightLine>
          </SectionItem>
        </ul>
      </Form>
    </CalculatorContainer>
  );
};

export default Calculator;
