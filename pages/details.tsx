import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import pokeapi from "./api/pokemon";
import Navbar from "../components/organism/Navbar.styled";
import DetailsCard from "../components/organism/DetailsCard.styled";
import Footer from "../components/Footer.styled";

const Details = ({ image, abilities, name, redirect }) => {
  const router = useRouter();

  useEffect(() => {
    if (redirect) {
      router.push("/404");
    }
  }, []);

  return (
    <Fragment>
      <Navbar search={"Search"} list={"List"} />
      <DetailsCard
        img={image}
        name={name}
        details={abilities}
        origin={"details"}
      />
      <Footer />
    </Fragment>
  );
};

Details.getInitialProps = async ({ query }) => {
  const { name } = query;

  const res = await pokeapi.get(`pokemon/${name}`);
  const data = await res.data;

  return {
    image: data.sprites.other.dream_world.front_default,
    name: data.name,
    abilities: data.abilities,
  };
};

export default Details;
