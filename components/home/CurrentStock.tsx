import { InputLabel, InputValue, LabelBlock, SectionInputLine, SectionItem, SectionRightLine, SectionTitle, ValueText } from "./CalculatorStyle";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InputValueProps, valueTextTheme } from "./interface";

export const Value = ({ value, theme = valueTextTheme.medium }: InputValueProps) => (
  <ValueText isActive={value > 0} textTheme={theme}>
    {value}
  </ValueText>
);
const CurrentStock = () => {
  return (
    <SectionItem>
      <SectionTitle>현재 보유 주식</SectionTitle>
      <SectionInputLine>
        <InputLabel>현재 시장가</InputLabel>
        <InputValue value={0} />
      </SectionInputLine>
      <SectionInputLine>
        <InputLabel>보유주식 평단가</InputLabel>
        <InputValue value={0} />
      </SectionInputLine>
      <SectionInputLine>
        <InputLabel>보유 수량</InputLabel>
        <InputValue value={0} />
      </SectionInputLine>
      <SectionRightLine>
        <LabelBlock>총 매입 금액</LabelBlock>
        <Value value={0} theme={valueTextTheme.small} />
      </SectionRightLine>
    </SectionItem>
  );
};

export default CurrentStock;
