import { useState } from "react";
import pokeapi from "../../pages/api/pokemon";
import styled from "styled-components";
import Button from "../atoms/Button.styled";
import Input from "../atoms/SearchInput.styled";

const Container = styled.form`
  width: 90%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.img`
  width: 50%;
  height: 100%;
`;

function InputContainer(props) {
  const [term, setTerm] = useState("");

  const { origin, click, getData } = props;

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTerm("");
    const fetchPokemon = await pokeapi.get(`pokemon/${term}`);
    const pokemon = await fetchPokemon.data;

    getData(pokemon);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder={"Search by Pokemon name or Pokemon Id"}
        value={term}
        onChange={handleChange}
      />
      <Button origin={origin} onClick={click}>
        <SearchIcon src="/search1.svg" />
      </Button>
    </Container>
  );
}

export default InputContainer;
