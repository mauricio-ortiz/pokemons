import styled from "styled-components";
import NavContainer from "./atoms/NavContainer.styled";

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 25px 0px #000000;
  background-color: rgba(102, 166, 206, 0.247);
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

function Footer() {
  return (
    <FooterContainer>
      <h1>Mauricio Ortiz</h1>
    </FooterContainer>
  );
}

export default Footer;
