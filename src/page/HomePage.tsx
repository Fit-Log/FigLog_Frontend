import styled from "styled-components";
import { Logo, Song, Write, Flag } from "../assets";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Header from "../components/Header";
import MyPage from "../components/MyPage";
import AddMenu from "../components/AddMenu";

const HomePage = () => {
  const menus = [
    {
      time: "아침",
      menu1: "닭가슴살 3개",
      menu2: "프로틴 쉐이크",
      menu3: "고구마 반 개",
      kcal: "230kcal",
    },
    {
      time: "점심",
      menu1: "닭가슴살 3개",
      menu2: "프로틴 쉐이크",
      menu3: "고구마 반 개",
      kcal: "230kcal",
    },
    {
      time: "저녁",
      menu1: "닭가슴살 3개",
      menu2: "프로틴 쉐이크",
      menu3: "고구마 반 개",
      kcal: "230kcal",
    },
  ];

  const exercises = [
    { exercise: "천국의 계단", plan: "1시간" },
    { exercise: "벤치프레스", plan: "5세트" },
    { exercise: "데드 리프트", plan: "1시간" },
  ];

  const member = [
    { major: "Backend", name: "김가은", name2: "유하은" },
    { major: "Frontend", name: "원은지" },
    { major: "iOS", name: "조영준" },
    { major: "Android", name: "양윤호" },
    { major: "Design", name: "강해민" },
  ];
  return (
    <Container>
      <Home>
        <Header />
        <PlayList>
          <SongImg src={Song} alt="노래 추천 배경" />
          <Word>
            <Recommend>
              핏로그가 추천하는
              <br />
              운동할 때 듣는 <span>플레이 리스트</span>
            </Recommend>
            <Link href="https://youtu.be/xlyrt5eAtKI?si=sb7d-lv4MKnG2tvb">
              바로가기 {">"}
            </Link>
            <Next>유튜브 플레이리스트로 넘어가게 됩니다.</Next>
          </Word>
        </PlayList>
        <MealList>
          <MealWrapper>
            <Meal>식단</Meal>
            <WriteImg src={Write} alt="글쓰기 아이콘" />
          </MealWrapper>
          <MenuSort>
            {menus.map((element) => (
              <MenuLine key={element.time}>
                <MenuWrapper>
                  <Time>{element.time}</Time>
                  <Menu>
                    {element.menu1} <br /> {element.menu2} <br />
                    {element.menu3}
                  </Menu>
                  <Kcal>{element.kcal}</Kcal>
                </MenuWrapper>
              </MenuLine>
            ))}
          </MenuSort>
        </MealList>
        <Planning>
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
                    <Exercise>{element.exercise}</Exercise>
                    <Todayplan>{element.plan}</Todayplan>
                  </ExerciseWrapper>
                ))}
              </ExerciseSort>
            </TodayWrapper>
          </ExerciseBack>
        </Planning>
        <GoalWrapper>
          <GoalSort>
            <Goal>
              <p>목표</p>
              <GoalImg src={Flag} alt="목표 깃발 사진" />
            </Goal>
            <WriteWrapper>
              <GoalText>매일 나만의 목표를 설정하고 지켜보세요!</GoalText>
              <WriteImg src={Write} />
            </WriteWrapper>
            <GoalInput placeholder="목표 설정..."></GoalInput>
          </GoalSort>
        </GoalWrapper>
        <Footer>
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
        </Footer>
      </Home>
      <Alert>
        <TodayText>오늘의 목표 시간</TodayText>
        <ClickButton>
          시간설정 <span>{">"}</span>
        </ClickButton>
      </Alert>
      <MyPage />
      <AddMenu />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const LogoImg = styled.img`
  width: 70px;
  height: 55px;
  margin-left: 70px;
`;

const PlayList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;
`;

const SongImg = styled.img`
  position: relative;
  width: 1500px;
  height: 300px;
`;

const Word = styled.div`
  position: absolute;
  left: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Recommend = styled.p`
  width: 1000px;
  letter-spacing: 5px;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.gray700};
  > span {
    color: ${({ theme }) => theme.colors.main800};
  }
`;

const Link = styled.a`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const Next = styled.p``;

const MealList = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const MealWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 250px;
`;

const Meal = styled.p`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.gray600};
  font-weight: 600;
`;

const WriteImg = styled.img`
  width: 18px;
  height: 18px;
`;

const MenuSort = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const MenuLine = styled.div`
  width: 420px;
  height: 200px;
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.main400};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 70px;
`;

const Time = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray700};
`;

const Menu = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const Kcal = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.main700};
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Planning = styled.div`
  display: flex;
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

const ExerciseSort = styled.div`
  display: flex;
  gap: 50px;
`;

const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Exercise = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const Todayplan = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main800};
`;

const GoalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 315px;
`;

const Goal = styled.div`
  display: flex;
  gap: 10px;
  > p {
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

const GoalImg = styled.img`
  width: 24px;
  height: 24px;
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

const GoalSort = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.gray700};
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

const Home = styled.div``;

const Alert = styled.div``;

const TodayText = styled.p`
  font-size: 16px;
  color: black;
`;

const ClickButton = styled.div`
  width: 320px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: #3c3c3c;
`;

export default HomePage;
