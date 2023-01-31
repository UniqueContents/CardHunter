import CardListCotainer from "@/container/cardListContainer";
import TagsContainer from "@/container/tagsConatiner";
import { media } from "@/styles/theme";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <FliterWrapper>
        <Title>조건식</Title>
        <TagsContainer />
        <CardListCotainer />
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
  ${media.custom(3000)} {
    min-width: 100rem;
  }
  ${media.desktop} {
    width: 80%;
    min-width: 0;
  }

  ${media.tablet} {
    width: 90%;
    min-width: 0;
  }

  ${media.mobile} {
    width: 100%;
    min-width: 340px;
  }
`;

const Title = styled.p`
  font-size: 5rem;
  ${(props) => props.theme.fontFamily}
  margin-bottom: 1rem;
`;
