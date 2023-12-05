import styled from "styled-components";
import { Left } from "../../assets";
const ExerciseInput = () => {
  return (
    <Container>
      <Input type="time" />
      <Img src={Left} />
    </Container>
  );
};

const Container = styled.div``;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export default ExerciseInput;
