import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styled from "styled-components";
import Name from "../atoms/Names.styled";
import Image from "../atoms/PokemonImg.styled";

const PokemonCard = styled.div`
  margin-top: ${(props) => (props.origin === "index" ? "0" : "150px")};
  width: ${(props) => (props.origin === "index" ? "100%" : "50%")};
  height: ${(props) => (props.origin === "index" ? "250px" : "400px")};
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 5px 5px 10px 2px #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease-in-out;
  font-family: "Lato", sans-serif;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 13px 4px #f2ff36;
    border: 0.5px solid #c4cf2b;
  }
`;

const Card = (props) => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const { name, src, origin } = props;

  const getPokemonImage = async () => {
    const fetchImage = await axios.get(src);
    const getImage = await fetchImage.data;

    setImage(getImage.sprites.other.dream_world.front_default);
  };

  useEffect(() => {
    if (image === "") {
      getPokemonImage();
    }
  }, [url]);

  return (
    <Link href={{ pathname: "details", query: { name } }}>
      {/* <Link href={{ pathname: `detail/${name}` }}> */}
      <PokemonCard origin={origin}>
        <Image src={origin === "index" ? image : props.img} alt={name} />
        <Name name={name} />
      </PokemonCard>
    </Link>
  );
};

export default Card;
