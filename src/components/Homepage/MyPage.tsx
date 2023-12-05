import styled from "styled-components";
import { Close } from "../../assets";

const MyPage = () => {
  const arr = [
    { title: "키", content: "210cm" },
    { title: "몸무게", content: "801kg" },
    { title: "나이", content: "309세" },
  ];
  return (
    <Container>
      <CloseImg src={Close} />
      <My>
        <Greating>
          <p>
            <span>원은지</span>님,
            <br />
            안녕하세요!
          </p>
        </Greating>
        <Fix>내 정보 수정</Fix>
      </My>
      <InfoBox>
        {arr.map((element) => (
          <Information key={element.title}>
            <ValueWrapper>
              <Name>{element.title}</Name>
              <Value>{element.content}</Value>
            </ValueWrapper>
            <Line></Line>
          </Information>
        ))}
      </InfoBox>
      <Wrapper>
        <Logout>로그아웃</Logout>
        <Logout>회원 탈퇴</Logout>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  position: fixed;
  top: 100px;
  right: 0px;
  width: 400px;
  height: 820px;
  background-color: ${({ theme }) => theme.colors.gray000};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 70px;
`;

const CloseImg = styled.img`
  width: 28px;
  height: 28px;
  margin-left: -300px;
`;

const My = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 110px;
`;

const Greating = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.gray800};
  > p span {
    color: ${({ theme }) => theme.colors.main500};
  }
`;

const Fix = styled.button`
  width: 90px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray400};
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray000};
  padding: 5px 10px;
`;

const InfoBox = styled.div`
  width: 330px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main400};
  border-radius: 8px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Information = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Name = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray000};
`;

const Value = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray000};
`;

const Line = styled.div`
  width: 3px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 23px;
`;

const Logout = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray800};
`;

export default MyPage;
