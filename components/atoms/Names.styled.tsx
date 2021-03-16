import styled from "styled-components";

const Names = styled.h2`
  font-size: 20px;
`;

const NameContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = (props) => {
  const { name, origin } = props;

  return (
    <NameContainer origin={origin}>
      <Names>{name}</Names>
    </NameContainer>
  );
};

export default Name;
