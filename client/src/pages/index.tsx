import CardListCotainer from "@/container/cardListContainer";
import TagsContainer from "@/container/tagsConatiner";
import { media } from "@/styles/theme";
import styled from "styled-components";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <Wrapper>
      <About>
        <TextField>
          <Title>나한테 딱 맞는 혜택</Title>
          <SubTitle>조건식을 완성해 나에게 맞는 혜택을 찾아보세요!</SubTitle>
        </TextField>
        <Banner />
      </About>
      <FliterWrapper>
        <Title>조건식</Title>
        <TagsContainer />
        <CardListCotainer />
      </FliterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

const About = styled.div`
  position: relative;
  min-height: 80rem;
  width: 100%;
  display: flex;
  justify-content: center;
  ${media.mobile} {
    min-height: 60rem;
  }
`;

const FliterWrapper = styled.div`
  margin-top: 5rem;
  width: 40%;
  z-index: 20;
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

const TextField = styled.div`
  position: absolute;
  top: 50%;
  ${media.custom(3000)} {
    left: 20%;
  }
  ${media.desktop} {
    left: 15%;
  }
  ${media.tablet} {
    left: 5%;
  }
  ${media.mobile} {
    left: 0%;
  }
`;

const Title = styled.p`
  position: relative;
  font-size: 5rem;
  ${(props) => props.theme.fontFamily}
  margin-bottom: 1rem;
  z-index: 10;
  ${media.mobile} {
    font-size: 3.5rem;
  }
`;

const SubTitle = styled.p`
  position: relative;
  font-size: 3.5rem;
  font-weight: 300;
  ${(props) => props.theme.fontFamily}
  z-index: 10;
  ${media.mobile} {
    font-size: 2.5rem;
  }
`;
