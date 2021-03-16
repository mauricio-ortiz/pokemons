import { Fragment } from "react";
import pokeapi from "./api/pokemon";
import Navbar from "../components/organism/Navbar.styled";
import List from "../components/organism/List.styled";
import Footer from "../components/Footer.styled";

function Home({ pokemons, nextPage }) {
  return (
    <Fragment>
      <Navbar search={"Search"} list={"List"} />
      <List {...pokemons} next={nextPage} origin={"index"} />
      <Footer />
    </Fragment>
  );
}

Home.getInitialProps = async () => {
  const res = await pokeapi.get("pokemon");
  const pokemon = await res.data;

  return { pokemons: pokemon.results, nextPage: pokemon.next };
};

export default Home;

/*services -> done  / redux -> in progress / context -> in progress / ts -> partilly done*/
