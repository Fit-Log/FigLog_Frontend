import styled from "styled-components";
import { Close } from "../../assets";

const ModifyAlert = () => {
  const info = [
    { text: "키", unit: "cm" },
    { text: "몸무게", unit: "kg" },
    { text: "나이", unit: "세" },
  ];
  return (
    <Container>
      <CloseImg src={Close} />
      <Wrapper>
        <Modify>내 정보 수정</Modify>
        {info.map((element) => (
          <BoxWrapper key={element.text}>
            <Text>{element.text}</Text>
            <InputBox />
            <Unit>{element.unit}</Unit>
          </BoxWrapper>
        ))}
      </Wrapper>
      <Complete>수정 완료</Complete>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 250px;
  left: 730px;
  width: 440px;
  height: 520px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray000};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseImg = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 20px;
  margin-left: 360px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Modify = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const InputBox = styled.input`
  position: relative;
  width: 300px;
  height: 50px;
  padding: 15px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.gray100};
`;

const Unit = styled.p`
  position: absolute;
  left: 260px;
  margin-top: 47px;
`;

const Complete = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main700};
  margin: 70px 0px 0px 310px;
`;

export default ModifyAlert;
