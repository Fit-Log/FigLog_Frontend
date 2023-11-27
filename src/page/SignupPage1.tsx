import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";

const SignupPage = () => {
  return (
    <Container>
      <Header />
      <SignupLine>
        <SignupText>회원가입</SignupText>
        <SignupWrapper>
          <OrderWrapper>
            <Order>1/4</Order>
            <ButtonWrapper>
              <Input />
              <Check>아이디를 다시 확인해주세요</Check>
              <SignupButton>다음</SignupButton>
            </ButtonWrapper>
          </OrderWrapper>
          <LoginText>
            이미 가입하셨나요? <span>로그인</span>
          </LoginText>
        </SignupWrapper>
      </SignupLine>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignupLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  width: 600px;
  height: 660px;
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.main300};
  border-radius: 20px;
`;

const SignupText = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray700};
`;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 220px;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Order = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray500};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Check = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ff0000;
`;

const SignupButton = styled.button`
  width: 180px;
  height: 60px;
  padding: 9px 40px 9px 40px;
  background-color: ${({ theme }) => theme.colors.main200};
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-left: 270px;
`;

const LoginText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray600};
  > span {
    color: ${({ theme }) => theme.colors.main300};
  }
`;

export default SignupPage;
