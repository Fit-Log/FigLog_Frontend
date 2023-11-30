import styled from "styled-components";

interface InputProps {
  placeholder?: string;
}

const GrayInput = ({ placeholder }: InputProps) => {
  return <Inputs placeholder={placeholder} />;
};

const Inputs = styled.input`
  width: 330px;
  height: 40px;
  padding: 10px 0px 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
  background-color: ${({ theme }) => theme.colors.gray100};
`;

export default GrayInput;
