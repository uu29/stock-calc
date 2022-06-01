import styled from "styled-components";

const Calculator = () => {
  return <CalculatorContainer>새로고침
    최종 평단가
    현재 보유 주식
    보유 주식 평단가
    보유 수량
    추가 매수
    추매 평단가
    추매 수량
  </CalculatorContainer>;
};

const CalculatorContainer = styled.div`
  max-width: 40rem;
  margin: 2rem auto;
  padding: 1rem 1.3rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px -4px rgba(106, 110, 114, 0.32);
`;

export default Calculator;
