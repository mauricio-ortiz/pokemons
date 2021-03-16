import styled from "styled-components";
import Name from "../atoms/Names.styled";
import Image from "../atoms/PokemonImg.styled";

const Container = styled.div`
  width: 95%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 10px 2px #000000;
  background-color: rgba(209, 203, 203, 0.4);
  margin: 20px 0;
`;

const Presentation = (props) => {
  const { src, name, origin } = props;

  return (
    <Container>
      <Image src={src} origin={origin} />
      <Name name={name} origin={origin} />
    </Container>
  );
};

export default Presentation;
