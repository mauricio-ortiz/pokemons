import styled from "styled-components";

const Image = styled.img`
  height: ${(props) => (props.origin === "details" ? "80%" : "150px")};
  width: 100%;
`;

export default Image;
