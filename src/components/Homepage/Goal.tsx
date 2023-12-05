import styled from "styled-components";
import { Write, Flag } from "../../assets";

const Goal = () => {
  return (
    <Container>
      <GoalWrapper>
        <GoalTitle>
          <p>목표</p>
          <GoalImg src={Flag} alt="목표 깃발 사진" />
        </GoalTitle>
        <WriteWrapper>
          <GoalText>매일 나만의 목표를 설정하고 지켜보세요!</GoalText>
          <WriteImg src={Write} />
        </WriteWrapper>
        <GoalInput placeholder="목표 설정..."></GoalInput>
      </GoalWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 315px;
`;

const WriteImg = styled.img`
  width: 18px;
  height: 18px;
`;

const GoalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > p {
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

const GoalImg = styled.img`
  width: 30px;
  height: 30px;
`;

const WriteWrapper = styled.div`
  display: flex;
  gap: 1210px;
`;

const GoalText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray600};
`;

const GoalInput = styled.input`
  width: 1500px;
  height: 100px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray800};
  padding: 32px 1145px 32px 42px;
  border-radius: 24px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray100};
`;

const GoalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default Goal;
