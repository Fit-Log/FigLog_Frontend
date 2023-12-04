import styled from "styled-components";

const Input = () => {
  return <Inputs />;
};

const Inputs = styled.input`
  width: 450px;
  height: 70px;
  padding: 20px 0px 20px 28px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 16px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray800};
`;

export default Input;
