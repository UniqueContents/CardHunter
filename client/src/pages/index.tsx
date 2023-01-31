import TagsContainer from "@/container/tagsConatiner";
import { media } from "@/styles/theme";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <FliterWrapper>
        <Title>조건식</Title>
        <TagsContainer />
      </FliterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 6rem;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    to top,
    ${(props) => props.theme.mainBgColor},
    white
  );
`;

const FliterWrapper = styled.div`
  margin-top: 5rem;
  width: 40%;
  ${media.desktop} {
    width: 70%;
  }

  ${media.tablet} {
    width: 80%;
  }

  ${media.mobile} {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 5rem;
  ${(props) => props.theme.fontFamily}
  margin-bottom: 1rem;
`;
