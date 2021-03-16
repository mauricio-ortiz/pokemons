import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CharacteristicContainer = styled.div`
  width: 100%;
  height: 50%;
  margin: 2px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NameContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AbilityName = styled.h3`
  font-size: 18px;
`;

const AbilityDescription = styled.p`
  font-size: 13px;
  font-weight: bold;
  height: 80%;
  text-align: center;
`;

const Charactristic = (props) => {
  const [skills, setSkills] = useState(false);
  const [text, setText] = useState([]);
  console.log(props.ability.url);

  const fetchData = async () => {
    const fetchAbility = await axios.get(props.ability.url);
    const ability = await fetchAbility.data;
    let effect = ability.effect_entries.filter((entry) => {
      return entry.language.name === "en";
    });
    setSkills(ability);
    setText(effect[0].effect);
  };

  useEffect(() => {
    fetchData();
  }, [props.ability]);

  return (
    <CharacteristicContainer>
      <NameContainer>
        <AbilityName>{skills.name}</AbilityName>
      </NameContainer>
      <DescriptionContainer>
        <AbilityDescription>{text}</AbilityDescription>
      </DescriptionContainer>
    </CharacteristicContainer>
  );
};

export default Charactristic;
