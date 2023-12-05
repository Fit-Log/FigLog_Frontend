import styled from "styled-components";
import { Close, Left } from "../../assets";
import Exercise from "../../components/Homepage/Exercise";

const TimeAlert = () => {
  return (
    <Container>
      <CloseImg src={Close} />
      <Wrapper>
        <BoxWrapper>
          <TodayText>오늘의 목표 시간</TodayText>
          <Box>
            <Placeholder>시간 설정</Placeholder>
            <Allow src={Left} />
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <TodayText>현재 운동 시간</TodayText>
          <Box>
            <Placeholder>시간 설정</Placeholder>
            <Allow src={Left} />
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <TodayText>오늘의 운동</TodayText>
          <Input placeholder="운동 종류 입력" />
          <Box>
            <Placeholder1>운동 시간 입력</Placeholder1>
            <Allow src={Left} />
          </Box>
          <Exercise />
        </BoxWrapper>
      </Wrapper>
      <TimeBox></TimeBox>
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

const TodayText = styled.p`
  font-size: 16px;
  color: black;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  gap: 200px;
`;

const Placeholder = styled.p`
  font-size: 14px;
  color: #3c3c3c;
`;

const Placeholder1 = styled.p`
  font-size: 14px;
  color: #3c3c3c;
  margin-right: -30px;
`;

const Allow = styled.img`
  width: 20px;
  height: 20px;
`;

const Input = styled.input`
  width: 320px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: none;
  border-radius: 8px;
  padding: 8px 20px;

  &::placeholder {
    font-size: 14px;
    color: #3c3c3c;
    font-weight: 500;
  }
`;

const Complete = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main700};
  margin: 70px 0px 0px 310px;
`;

const TimeBox = styled.div`
  position: absolute;
  top: 130px;
  left: 60px;
  width: 320px;
  height: 170px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 8px;
  background-color: #ffffff;
  padding: 0px 43px;
`;

export default TimeAlert;
