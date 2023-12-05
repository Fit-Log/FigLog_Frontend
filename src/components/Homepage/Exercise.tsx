import styled from "styled-components";
import { Close } from "../../assets";

const Exercise = () => {
  return (
    <Back>
      <Text>벤치프레스</Text>
      <Text>00 : 30 : 20</Text>
      <CloseImg src={Close} />
    </Back>
  );
};

const Back = styled.div`
  width: 320px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
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

export default Exercise;
