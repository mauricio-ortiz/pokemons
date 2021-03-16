import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ButtonContainer from "../molecules/ButtonContainer.styled";
import Button from "../atoms/Button.styled";
import Card from "../molecules/PokemonCard.styled";

const ListContainer = styled.div`
  width: 100%;
  height: 90%;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 20px;
  justify-items: center;
  align-items: center;
`;

const List = (props) => {
  const { origin, next } = props;

  const [pokemons, setPokemons] = useState(
    Object.values(props).filter((pokemon) => pokemon.name)
  );
  const [nextPage, setNextPage] = useState(next);

  const fetchNextPage = async () => {
    const fetchNextPage = await axios.get(nextPage);
    const nextPageResults = await fetchNextPage.data;

    setNextPage(nextPageResults.next);
    setPokemons(nextPageResults.results);
  };

  useEffect(() => {
    console.log(next);
  }, []);

  return (
    <Fragment>
      <ListContainer>
        {pokemons.map(({ name, url }, key) => {
          if (name) {
            return <Card key={key} name={name} src={url} origin={origin} />;
          }
        })}
      </ListContainer>
      <ButtonContainer>
        <Button>Previous</Button>
        <Button onClick={fetchNextPage}>Next</Button>
      </ButtonContainer>
    </Fragment>
  );
};

export default List;
