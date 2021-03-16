import styled from "styled-components";
import Characteristic from "../atoms/Characteristic.styled";

const Characteristics = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px 2px #000000;
  background-color: rgba(209, 203, 203, 0.4);
`;

const CharacteristicsGroup = (props) => {
  const { details, origin } = props;

  return (
    <Characteristics>
      {details.map((detail, key) => {
        return (
          <Characteristic ability={detail.ability} key={key} origin={origin} />
        );
      })}
    </Characteristics>
  );
};

export default CharacteristicsGroup;
