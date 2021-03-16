import styled from "styled-components";
import CharacteristicsGroup from "../molecules/Characteristics.styled";
import Presentation from "../molecules/Presentation.styled";

const CardContainer = styled.div`
  width: 40%;
  height: ${(props) => (props.origin === "details" ? "620px" : "auto")};
  margin-top: 30px;
  border-radius: 3px;
  box-shadow: 5px 5px 10px 2px #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

const DetailsCard = (props) => {
  const { img, name, details, origin } = props;

  return (
    <CardContainer origin={origin}>
      <Presentation src={img} name={name} origin={origin} />
      <CharacteristicsGroup details={details} origin={origin} />
    </CardContainer>
  );
};

export default DetailsCard;
