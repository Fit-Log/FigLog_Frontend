import styled from "styled-components";
import { Logo } from "../../assets";

const Footer = () => {
  const member = [
    { major: "Backend", name: "김가은", name2: "유하은" },
    { major: "Frontend", name: "원은지" },
    { major: "iOS", name: "조영준" },
    { major: "Android", name: "양윤호" },
    { major: "Design", name: "강해민" },
  ];

  return (
    <Container>
      <LogoSort>
        <IntroduceWrapper>
          {member.map((element) => (
            <Introduce>
              <Major>{element.major}</Major>
              <Name>{element.name}</Name>
              <Name>{element.name2}</Name>
            </Introduce>
          ))}
        </IntroduceWrapper>
        <LogoImg src={Logo} alt="로고" />
      </LogoSort>
      <Line></Line>
      <TextWrapper>
        <FooterText>ⓒ 2023 Fitlog</FooterText>
        <FooterText>연락처: 042-1234-5678</FooterText>
        <FooterText>
          주소: (34111) 대전광역시 유성구 가정북로 76(장동 23-9)
        </FooterText>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const LogoImg = styled.img`
  width: 70px;
  height: 55px;
  margin-left: 70px;
`;

const LogoSort = styled.div`
  display: flex;
  justify-content: center;
  gap: 1000px;
`;

const IntroduceWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Major = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray200};
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray200};
`;

const Line = styled.div`
  width: 1500px;
  height: 1px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray000};
  margin-left: 145px;
`;

const FooterText = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray200};
`;

const TextWrapper = styled.div`
  margin-left: 145px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
export default Footer;
