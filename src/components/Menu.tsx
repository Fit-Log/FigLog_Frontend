import styled from "styled-components";
import { Close } from "../assets";

const Menu = () => {
  return (
    <Back>
      <Text>닭가슴살</Text>
      <Text>230kcal</Text>
      <CloseImg src={Close} />
    </Back>
  );
};

const Back = styled.div`
  width: 330px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main100};
`;

const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const CloseImg = styled.img`
  margin-left: 100px;
  width: 20px;
  height: 20px;
`;

export default Menu;
