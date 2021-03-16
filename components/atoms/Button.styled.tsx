import styled from "styled-components";

const Button = styled.button`
  width: 75px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 2px;
  box-shadow: ${(props) =>
    props.origin === "search" ? "none" : "2px 5px 10px 2px #000000"};
`;

export default Button;
