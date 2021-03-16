import styled from "styled-components";
import TeamRocket from "../atoms/TeamRocket.styled";
import NotFound from "../atoms/404.styled";

const Container = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
`;

const NotFoundContainer = () => {
  return (
    <Container>
      <NotFound>404 - Not Found</NotFound>
      <TeamRocket src="/404.png" />
    </Container>
  );
};

export default NotFoundContainer;
