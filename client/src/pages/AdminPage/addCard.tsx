import AddCardContainer from "@/container/form/addCardContainer";
import styled from "styled-components";

export default function AddCard() {
  return (
    <Wrapper>
      <AddCardContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 6rem;
`;
