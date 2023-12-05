import styled from "styled-components";
import { Write } from "../../assets";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const Planning = () => {
  const exercises = [
    { exercise: "천국의 계단", plan: "1시간" },
    { exercise: "벤치프레스", plan: "5세트" },
    { exercise: "데드 리프트", plan: "1시간" },
  ];

  return (
    <Container>
      <ExerciseTime>
        <TimeWrapper>
          <Date>2023-11-13</Date>
          <Plan>목표 : 2시간 30분</Plan>
          <CurrentTime>1시간 15분 30초</CurrentTime>
        </TimeWrapper>
        <CircularProgressbarWithChildren
          value={70}
          text="70%"
          counterClockwise
          styles={{
            root: { width: "200px", height: "200px" },
            trail: {
              stroke: "#1254A8",
            },
            path: {
              stroke: `#ffffff`, // 게이지의 색상
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            text: {
              fill: "#FFFFFF", // 텍스트의 색상
              fontSize: "20px", // 텍스트의 크기
              dominantBaseline: "middle", // 텍스트의 수직 정렬 방식
              textAnchor: "middle", // 텍스트의 수평 정렬 방식
            },
          }}
        />
      </ExerciseTime>
      <ExerciseBack>
        <TodayWrapper>
          <TodayExercise>
            <p>오늘의 운동</p>
            <WriteImg src={Write} alt="글쓰기 아이콘" />
          </TodayExercise>
          <ExerciseSort>
            {exercises.map((element) => (
              <ExerciseWrapper key={element.exercise}>
                <ExerciseName>{element.exercise}</ExerciseName>
                <Todayplan>{element.plan}</Todayplan>
              </ExerciseWrapper>
            ))}
          </ExerciseSort>
        </TodayWrapper>
      </ExerciseBack>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ExerciseTime = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 600px;
  width: 1400px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.main600};
  border-radius: 0px 20px 20px 0px;
`;

const Date = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray100};
`;

const Plan = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray400};
`;

const CurrentTime = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
`;

const ExerciseBack = styled.div`
  position: relative;
  width: 2000px;
  height: 300px;
  background-color: #eaeaea;
  display: flex;
  justify-content: flex-end;
`;

const TodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin-right: 40px;
`;

const TodayExercise = styled.div`
  > p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.gray600};
  }
  display: flex;
  gap: 15px;
`;

const WriteImg = styled.img`
  width: 18px;
  height: 18px;
`;

const ExerciseSort = styled.div`
  display: flex;
  gap: 50px;
`;

const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ExerciseName = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const Todayplan = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main800};
`;

export default Planning;
