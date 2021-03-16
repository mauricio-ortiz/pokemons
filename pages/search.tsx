import { Fragment, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/organism/Navbar.styled";
import InputContainer from "../components/molecules/SearchContainer.styled";
import DetailsCard from "../components/organism/DetailsCard.styled";
import Footer from "../components/Footer.styled";

const Container = styled.div`
  height: 75.5vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Search() {
  const [pokemon, setPokemon] = useState();

  const fetchData = (data) => {
    setPokemon(data);
  };

  if (pokemon === undefined) {
    return (
      <Fragment>
        <Navbar search={"Search"} list={"List"} />
        <Container>
          <InputContainer origin={"search"} getData={fetchData} />
        </Container>
        <Footer />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Navbar search={"Search"} list={"List"} />
        <InputContainer origin={"search"} getData={fetchData} />
        <DetailsCard
          img={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          details={pokemon.abilities}
          origin={"search"}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default Search;
