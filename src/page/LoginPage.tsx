import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";

const LoginPage = () => {
  return (
    <Container>
      <Header />
      <LoginLine>
        <LoginText>로그인</LoginText>
        <LoginWrapper>
          <ButtonWrapper>
            <Input />
            <Input />
            <LoginButton>로그인</LoginButton>
          </ButtonWrapper>
          <SignupText>
            아직 가입하지 않으셨나요? <span>회원가입</span>
          </SignupText>
        </LoginWrapper>
      </LoginLine>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginLine = styled.div`
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

const LoginText = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray700};
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;
`;

const LoginButton = styled.button`
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

const SignupText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray600};
  > span {
    color: ${({ theme }) => theme.colors.main300};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LoginPage;
