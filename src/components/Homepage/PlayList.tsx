import styled from "styled-components";
import { Song, Write } from "../../assets";

const PlayList = () => {
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
  return (
    <Container>
      <Youtube>
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
      </Youtube>
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
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Youtube = styled.div`
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

export default PlayList;
