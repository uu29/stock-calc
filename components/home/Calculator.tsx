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
            <SectionLine>
              <Value value={0} theme={valueTextTheme.large} />
            </SectionLine>
            <SectionLine>
              <Label>최종 매수 금액</Label>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionLine>
            <SectionLine>
              <Label>최종 수량</Label>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionLine>
            <SectionLine>
              <Label>손익률</Label>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionLine>
            <SectionLine>
              <Label>손익금</Label>
              <Value value={0} theme={valueTextTheme.small} />
            </SectionLine>
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

const SectionItem = styled.li``;

const SectionLine = styled.div`
  text-align: right;
`;

const SectionTitle = styled.h2`
  padding-bottom: 3px;
  font-size: 1.6rem;
  border-bottom: 2px solid #151515;
`;

const Label = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.inactiveGray};
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
