import styled from "styled-components";

const valueTextTheme = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

type ValueTextTheme = typeof valueTextTheme[keyof typeof valueTextTheme];

interface InputValueProps {
  value: number;
  theme: ValueTextTheme;
}

const Value = ({ value, theme = valueTextTheme.medium }: InputValueProps) => (
  <ValueText isActive={value > 0} textTheme={theme}>
    {value}
  </ValueText>
);

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

const CalculatorContainer = styled.div`
  max-width: 58rem;
  margin: 2rem auto;
  padding: 1.6rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px -4px rgba(106, 110, 114, 0.32);
`;

const Form = styled.form`
  margin-top: 3rem;
`;

const SectionItem = styled.li`
  margin-bottom: 4rem;
`;

const SectionRightLine = styled.div`
  text-align: right;
  margin-bottom: 6px;
`;

const SectionTitle = styled.h2`
  padding-bottom: 6px;
  border-bottom: 2px solid #151515;
  margin-bottom: 6px;
`;

const Label = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.inactiveGray};
`;

const LabelBlock = styled.div`
  display: block;
  margin-bottom: 5px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.inactiveGray};
`;

const SectionInputLine = styled.div`
  display: flex;
  align-items: center;
  margin: 1.2rem 0;
`;

const InputLabel = styled.label`
  display: block;
  width: 15rem;
  line-height: 1.4;
  font-size: 1.5rem;
`;

const InputValue = styled.input`
  display: block;
  padding: 1rem;
  flex: 1 0 0;
  background: ${({ theme }) => theme.colors.inputGray};
  border-radius: 4px;
  line-height: 1.4;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.input.small};
`;

const Refresh = styled.button`
  float: right;
  font-size: 1.4rem;
`;

const ValueText = styled.span<{ isActive: boolean; textTheme: ValueTextTheme }>`
  display: inline-block;
  margin-left: 8px;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.activeBlack : theme.colors.inactiveGray)};
  font-size: ${({ theme, textTheme }) => theme.fontSize.input[textTheme]};
  font-weight: 600;
`;

export default Calculator;
