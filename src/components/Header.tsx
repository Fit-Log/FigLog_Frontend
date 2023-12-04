import styled from "styled-components";
import { Logo } from "../assets";

const Header = () => {
  return (
    <Head>
      <LogoImg src={Logo} alt="로고" />
      <Button>
        <Graph>변화 | 그래프</Graph>
        <Login>로그인</Login>
      </Button>
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 1400px;
  height: 100px;
`;

const LogoImg = styled.img`
  width: 70px;
  height: 55px;
  margin-left: 70px;
`;

const Graph = styled.p`
  font-size: 20px;
`;

const Login = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const Button = styled.p`
  display: flex;
  align-items: center;
  gap: 70px;
`;

export default Header;
