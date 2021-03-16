import styled from "styled-components";
import ButtonContainer from "../molecules/ButtonContainer.styled";
import Pokeball from "../atoms/Pokeball.styled";
import Button from "../atoms/Button.styled";
import NavContainer from "../atoms/NavContainer.styled";

const Navbar = (props) => {
    const { search, list, src } = props;
    return (
        <NavContainer>
            <Pokeball src="/pokelogo.png" />
            <ButtonContainer>
                <a href="/">
                    <Button>{list}</Button>
                </a>
                <a href="/search">
                    <Button>{search}</Button>
                </a>
            </ButtonContainer>
        </NavContainer>
    );
};

export default Navbar;
