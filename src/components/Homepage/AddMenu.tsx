import styled from "styled-components";
import { Close, Write, Plus } from "../../assets";
import GrayInput from "./GrayInput";
import Menu from "./Menu";

const AddMenu = () => {
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
      kcal: "230kcal",
    },
    {
      time: "저녁",
      kcal: "230kcal",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <CloseImg src={Close} />
        <AddText>식단 추가하기</AddText>
        {menus.map((element) => (
          <MenuLine key={element.time}>
            <MenuWrapper>
              <Times>{element.time}</Times>
              <PlusMenu>
                메뉴 추가하기 +
                {/* {element.menu1} <br /> {element.menu2} <br />
              {element.menu3} */}
              </PlusMenu>
              <EndWrapper>
                <WriteIcon src={Write} />
                <Kcal>{element.kcal}</Kcal>
              </EndWrapper>
            </MenuWrapper>
          </MenuLine>
        ))}
      </Wrapper>
      <Wrapper>
        <Time>점심</Time>
        <AddWrapper>
          <Add>메뉴 추가</Add>
          <AddImg src={Plus} />
        </AddWrapper>
        <GrayInput placeholder="메뉴 입력" />
        <GrayInput placeholder="칼로리 입력" />
      </Wrapper>
      <Wrapper>
        <Menu />
        <Menu />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  position: fixed;
  top: 100px;
  right: 0px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 400px;
  height: 820px;
  background-color: ${({ theme }) => theme.colors.gray000};
  padding-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const CloseImg = styled.img`
  width: 28px;
  height: 28px;
  margin-left: -300px;
`;

const AddText = styled.p`
  font-size: 20px;
  margin-left: -220px;
  margin-top: 30px;
`;

const MenuLine = styled.div`
  width: 330px;
  height: 100px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.main400};
  border-radius: 12px;
  display: flex;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 10px;
`;

const Times = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray700};
`;

const PlusMenu = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const EndWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const WriteIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 45px;
`;

const Kcal = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.main700};
`;

const Time = styled.p`
  font-size: 20px;
  color: #000000;
  margin-left: -290px;
  margin-bottom: 20px;
`;

const AddWrapper = styled.div`
  display: flex;
  gap: 245px;
`;

const Add = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const AddImg = styled.img`
  width: 19px;
  height: 19px;
`;

export default AddMenu;
