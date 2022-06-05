import Calculator from "components/home/Calculator";
import styled from "styled-components";

const Home = () => {
  return (
    <main>
      <AppTitle>stock-calc</AppTitle>
      <MainDescription>
        주식/코인 <Strong>물타기 계산기</Strong>입니다.
        <br />
        보유하고 있는 주식/코인의 평단가, 수량을 입력하고 물 탈 주식/코인의 평단가, 수량을 입력해주세요.
        <br />
        자동으로 최종 평단가가 계산됩니다.
      </MainDescription>
      <Calculator />
    </main>
  );
};

const AppTitle = styled.h1`
  margin: 1rem;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
`;

const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.mainOrange};
`;

const MainDescription = styled.p`
  max-width: 58rem;
  margin: 3rem auto 0;
  padding: 0 1.6rem;
  font-size: 1.4rem;
`;

export default Home;
